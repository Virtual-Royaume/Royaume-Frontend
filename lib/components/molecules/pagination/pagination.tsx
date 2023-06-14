import type { Component } from "@lib/utils/component";
import type { PaginationProps } from "./pagination.type";
import clsx from "clsx";
import { ReactElement } from "react";

export const Pagination: Component<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Default Button Style :
  const styles = "flex items-center justify-center rounded-md bg border border-background-info h-10 w-10";

  const handlePageChange = (page: number) => {
    if (page !== currentPage) onPageChange(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = (): ReactElement[] => {
    const pageNumbers: ReactElement[] = [];

    // Afficher les boutons pour les pages précédentes
    for (let i = currentPage - 1; i >= Math.max(currentPage - 2, 1); i--) {
      pageNumbers.unshift(
        <div onClick={() => handlePageChange(i)} className={clsx(styles, "text-white-desc hover:bg-purple cursor-pointer")}>
          {i}
        </div>
      );
    }

    // Afficher le bouton pour la page active
    pageNumbers.push(
      <div onClick={() => handlePageChange(currentPage)} className={clsx(styles, "bg-purple text-white")}>
        {currentPage}
      </div>
    );

    // Afficher les boutons pour les pages suivantes
    for (let i = currentPage + 1; i <= Math.min(currentPage + 2, totalPages); i++) {
      pageNumbers.push(
        <div onClick={() => handlePageChange(i)} className={clsx(styles, "text-white-desc hover:bg-purple cursor-pointer")}>
          {i}
        </div>
      );
    }

    // Afficher les boutons pour les pages suivantes s'il reste de la place
    for (let i = currentPage + 3; i <= totalPages && pageNumbers.length < 5; i++) {
      pageNumbers.push(
        <div onClick={() => handlePageChange(i)} className={clsx(styles, "text-white-desc hover:bg-purple cursor-pointer")}>
          {i}
        </div>
      );
    }

    // Ajouter des boutons pour les pages précédentes s'il reste de la place
    for (let i = currentPage - 3; i >= 1 && pageNumbers.length < 5; i--) {
      pageNumbers.unshift(
        <div onClick={() => handlePageChange(i)} className={clsx(styles, "text-white-desc hover:bg-purple cursor-pointer")}>
          {i}
        </div>
      );
    }
    return pageNumbers;
  }

  return (
    <div className="flex items-center gap-3">
      <div onClick={handlePreviousPage} className={clsx(styles, "text-white-desc", {
        "cursor-default": currentPage === 1,
        "hover:bg-purple cursor-pointer": currentPage !== 1
      })}>
        {'<'}
      </div>
      {renderPageNumbers()}
      <div onClick={handleNextPage} className={clsx(styles, "text-white-desc", {
        "cursor-default": currentPage === totalPages,
        "hover:bg-purple cursor-pointer": currentPage !== totalPages
      })}>
        {'>'}
      </div>
    </div>
  );
};
