const maxVisiblePages = 5;

export const generatePageList = (currentPage: number, pageCount: number): number[] => {
  const pages: number[] = [];

  const startPage = Math.max(Math.min(currentPage - 2, pageCount - maxVisiblePages + 1), 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, pageCount);

  for (let i = startPage; i <= endPage; i++) pages.push(i);

  return pages;
};