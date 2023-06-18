import type { ReactElement } from "react";
import { useState } from "react";
import { Pagination } from "./pagination";

export const ComponentPagination = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageCount = 7;

  return <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
};