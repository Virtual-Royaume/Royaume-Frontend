"use client";

import type { Member } from "#/lib/configs/member/member.type";
import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import { MemberCard } from "#/lib/components/atoms/cards/member-card";
import { members } from "#/lib/configs/member";
import { Pagination } from "#/lib/components/atoms/pagination";

export const MembersGrid = (): ReactElement => {
  const itemPerPages = 12;

  const [membersData, setMembersData] = useState<Member[]>(members.slice(0, itemPerPages));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(currentPage);
    setMembersData(members.slice((currentPage - 1) * itemPerPages, itemPerPages * currentPage));
  }, [currentPage]);

  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);

    if (e.target.value === "") {
      setMembersData(members.slice(0, itemPerPages));
      setCurrentPage(1);
    }

    const filteredMembers = members.filter((member) => {
      return member.username.toLowerCase().includes(e.target.value.toLowerCase())
        || member.tag.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setMembersData(filteredMembers.slice(0, itemPerPages));
    setCurrentPage(1);
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-start mb-5">
        <input
          type="text"
          placeholder="Rechercher un membre"
          className="w-96 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          value={search}
          onChange={handleSearch}
        />

        {search !== "" && (
          <span className="ml-4 text-white-desc">
            {membersData.length} {membersData.length > 1 ? "résultats" : "résultat"}
          </span>
        )}
      </div>

      <div aria-label="members list" role="list" className="grid md:grid-cols-members-cards gap-5 mb-14">
        {membersData.sort((a, b) => a.username < b.username ? -1 : 1).map((member) => (
          <MemberCard key={member.username} {...member} />
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination pageCount={Math.ceil(members.length / itemPerPages)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};