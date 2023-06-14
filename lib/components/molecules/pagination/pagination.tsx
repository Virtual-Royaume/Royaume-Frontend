"use client";

import type { Component } from "@lib/utils/component";
import type { DefaultPaginationButtonProps, PaginationProps } from "./pagination.type";
import clsx from "clsx";
import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const styles = "flex items-center justify-center rounded-md bg border border-background-info h-10 w-10";

export const Pagination: Component<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("page");

  // Set page based on url
  useEffect(() => {
    if (!queryPage) return;
    const parsedPage = parseInt(queryPage);
    if (isNaN(parsedPage)) return;

    onPageChange(parsedPage);
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [queryPage])

  const handlePageChange = (page: number) => {
    onPageChange(page);
    router.replace(pathname + "?" + (new URLSearchParams({ page: String(page) }).toString()));
  }

  const changePage = (page: number) => {
    if (page !== currentPage) handlePageChange(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const getPageNumbers = (): number[] => {
    const pageNumbers: number[] = [];

    // Afficher les boutons pour les pages précédentes
    for (let i = currentPage - 1; i >= Math.max(currentPage - 2, 1); i--) {
      pageNumbers.unshift(i);
    }

    // Afficher le bouton pour la page active
    pageNumbers.push(currentPage);

    // Afficher les boutons pour les pages suivantes
    for (let i = currentPage + 1; i <= Math.min(currentPage + 2, totalPages); i++) {
      pageNumbers.push(i);
    }

    // Afficher les boutons pour les pages suivantes s'il reste de la place
    for (let i = currentPage + 3; i <= totalPages && pageNumbers.length < 5; i++) {
      pageNumbers.push(i);
    }

    // Ajouter des boutons pour les pages précédentes s'il reste de la place
    for (let i = currentPage - 3; i >= 1 && pageNumbers.length < 5; i--) {
      pageNumbers.unshift(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center gap-3">
      <div onClick={handlePreviousPage} className={clsx(styles, "text-white-desc", {
        "cursor-default bg-background-info": currentPage === 1,
        "hover:bg-purple cursor-pointer": currentPage !== 1
      })}>
        {'<'}
      </div>
      {getPageNumbers().map((pageNumber) => (
        <DefaultPaginationButton  key={pageNumber} page={pageNumber} handlePageChange={changePage} active={currentPage === pageNumber} />
      ))}
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