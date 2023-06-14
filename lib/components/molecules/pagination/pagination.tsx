import type { Component } from "@lib/utils/component";
import type { DefaultPaginationButtonProps, PaginationProps } from "./pagination.type";
import clsx from "clsx";
import { ReactElement } from "react";

const styles = "flex items-center justify-center rounded-md bg border border-background-info h-10 w-10";

export const Pagination: Component<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
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
        <DefaultPaginationButton page={i} handlePageChange={handlePageChange} />
      );
    }

    // Afficher le bouton pour la page active
    pageNumbers.push(
      <DefaultPaginationButton page={currentPage} handlePageChange={handlePageChange} active />
    );

    // Afficher les boutons pour les pages suivantes
    for (let i = currentPage + 1; i <= Math.min(currentPage + 2, totalPages); i++) {
      pageNumbers.push(
        <DefaultPaginationButton page={i} handlePageChange={handlePageChange} />
      );
    }

    // Afficher les boutons pour les pages suivantes s'il reste de la place
    for (let i = currentPage + 3; i <= totalPages && pageNumbers.length < 5; i++) {
      pageNumbers.push(
        <DefaultPaginationButton page={i} handlePageChange={handlePageChange} />
      );
    }

    // Ajouter des boutons pour les pages précédentes s'il reste de la place
    for (let i = currentPage - 3; i >= 1 && pageNumbers.length < 5; i--) {
      pageNumbers.unshift(
        <DefaultPaginationButton page={i} handlePageChange={handlePageChange} />
      );
    }
    return pageNumbers;
  }

  return (
    <div className="flex items-center gap-3">
      <div onClick={handlePreviousPage} className={clsx(styles, "text-white-desc", {
        "cursor-default bg-background-info": currentPage === 1,
        "hover:bg-purple cursor-pointer": currentPage !== 1
      })}>
        {'<'}
      </div>
      {renderPageNumbers()}
      <div onClick={handleNextPage} className={clsx(styles, "text-white-desc", {
        "cursor-default bg-background-info": currentPage === totalPages,
        "hover:bg-purple cursor-pointer": currentPage !== totalPages
      })}>
        {'>'}
      </div>
    </div>
  );
};

const DefaultPaginationButton: Component<DefaultPaginationButtonProps> = ({ page, handlePageChange, active = false }) => {
  return (
    <div onClick={() => handlePageChange(page)} className={clsx(styles, "cursor-pointer", {
      "bg-purple text-white": active,
      "text-white-desc hover:bg-purple": !active
    })}>
      {page}
    </div>
  );
};