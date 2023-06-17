"use client";

import type { Component } from "#/lib/utils/component";
import type { PaginationProps } from "./pagination.type";
import type { Page } from "./pagination-item.type";
import { PaginationItem } from "./pagination-item";
import { useEffect, useState } from "react";
import { generatePageList } from "./pagination.util";

export const Pagination: Component<PaginationProps> = ({ pageCount, currentPage, setCurrentPage }) => {
  const [pages, setPages] = useState<Page[]>(generatePageList(currentPage, pageCount));

  useEffect(() => {
    setPages(generatePageList(currentPage, pageCount));
  }, [currentPage]);

  const handlePreviousPage = (): void => setCurrentPage(value => value - 1);
  const handleNextPage = (): void => setCurrentPage(value => value + 1);
  const handleSetPage = (page: Page): void => {
    if (typeof page === "number") setCurrentPage(page);
  };

  return (
    <nav aria-label="pagination" className="flex items-center gap-3">
      <PaginationItem page="previous" active={currentPage === 1} handlePageChange={() => handlePreviousPage()} />

      {pages.map((pageNumber) => (
        <PaginationItem
          key={pageNumber}
          page={pageNumber}
          active={currentPage === pageNumber}
          handlePageChange={page => handleSetPage(page)}
        />
      ))}

      <PaginationItem page="next" active={currentPage === pageCount} handlePageChange={() => handleNextPage()} />
    </nav>
  );
};