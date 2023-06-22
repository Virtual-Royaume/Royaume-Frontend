import type { SetState } from "#/lib/utils/component";

export type PaginationProps = {
  pageCount: number;

  currentPage: number;
  setCurrentPage: SetState<number>;
};