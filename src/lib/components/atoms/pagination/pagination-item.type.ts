export type Page = "previous" | number | "next";

export type PaginationItemProps = {
  active: boolean;
  page: Page;

  handlePageChange: (page: Page) => void;
}