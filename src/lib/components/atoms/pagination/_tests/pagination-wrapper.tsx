import type { ReactElement } from "react";
import type { Component } from "#/lib/utils/component";
import type { PaginationWrapperProps } from "./pagination-wrapper.type";
import { useState } from "react";
import { Pagination } from "#/lib/components/atoms/pagination/pagination";

export const PaginationWrapper: Component<PaginationWrapperProps> = ({ defaultPage = 1 }): ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(defaultPage);
  const pageCount = 7;

  return <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
};