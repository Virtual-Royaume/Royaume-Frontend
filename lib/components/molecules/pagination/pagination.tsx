import type { Component } from "@lib/utils/component";
import type { PaginationProps } from "./pagination.type";
import clsx from "clsx";

export const Pagination: Component<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Default Button Style :
  const styles = "flex items-center justify-center rounded-md bg border border-background-info h-10 w-10 cursor-pointer";

  const handlePageChange = (page: number) => {
    if (page !== currentPage) onPageChange(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex items-center gap-3">
      <div onClick={handlePreviousPage} className={clsx(styles, "text-white-desc", {
        "cursor-default": currentPage === 1,
        "hover:bg-purple": currentPage !== 1
      })}>
        {'<'}
      </div>
      {pages.map((page) => (
        <div onClick={() => handlePageChange(page)} className={clsx(
          styles,
          {
            "bg-purple text-white": page === currentPage,
            "text-white-desc": page !== currentPage
          }
        )}>
          {page}
        </div>
      ))}
      <div onClick={handleNextPage} className={clsx(styles, "text-white-desc", {
        "cursor-default": currentPage === totalPages,
        "hover:bg-purple": currentPage !== totalPages
      })}>
        {'>'}
      </div>
    </div>
  );
};