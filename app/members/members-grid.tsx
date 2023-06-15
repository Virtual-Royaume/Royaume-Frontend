"use client";

import { useState, type ReactElement } from "react";
import { MemberCard } from "@lib/components/atomics/cards/member-card";
import { members } from "@lib/configs/members";
import { Pagination } from "@lib/components/molecules/pagination/pagination";
import { Member } from "@lib/configs/members/members.type";

export const MembersGrid = (): ReactElement => {
  const itemPerPages = 12;

  const [membersData, setMembersData] = useState<Member[]>(members.slice(0, itemPerPages));
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    setMembersData(members.slice((page - 1) * itemPerPages, itemPerPages * page));
  }

  const [search, setSearch] = useState("");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (e.target.value === "") {
      setMembersData(members.slice(0, itemPerPages));
      setCurrentPage(1);
    }

    const filteredMembers = members.filter((member) => 
      member.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
      member.tag.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setMembersData(filteredMembers.slice(0, itemPerPages));
    setCurrentPage(1);
  }

  return (
    <div className="mt-10">
      <div className="flex justify-start mb-5">
        <input type="text" placeholder="Rechercher un membre" className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" value={search} onChange={handleSearch} />
      </div>
      
      <div className="grid md:grid-cols-members-cards gap-5 mb-14">
        {membersData.sort((a, b) => a.username < b.username ? -1 : 1).map((member) => (
          <MemberCard key={member.username} {...member} />
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination currentPage={currentPage} totalPages={Math.ceil(members.length / itemPerPages)} onPageChange={onPageChange} />
      </div>
    </div>
  );
};