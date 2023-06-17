export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type DefaultPaginationButtonProps = {
  page: number;
  active?: boolean;
  handlePageChange: (page: number) => void;
};