import type { Component } from "#/lib/utils/component";
import type { PaginationItemProps } from "./pagination-item.type";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { clsx } from "clsx";

export const PaginationItem: Component<PaginationItemProps> = ({ page, active, handlePageChange }) => {
  const isArrow = typeof page !== "number";

  const styles = clsx(
    "flex items-center justify-center",
    "border border-background-info",
    "h-10 w-10 rounded",
    "selection:select-none"
  );

  const pageStyles = clsx(styles, {
    "bg-purple text-white": active,
    "text-white-desc hover:bg-purple": !active
  });

  const arrowStyles = clsx(styles, "text-white-desc", {
    "bg-background-info": active,
    "hover:bg-purple": !active
  });

  return (
    <button
      aria-label={isArrow ? `${page} page` : `page ${page}`}
      aria-current={!isArrow && active ? "page" : undefined}

      className={isArrow ? arrowStyles : pageStyles}

      onClick={() => handlePageChange(page)}

      disabled={active}
    >
      {isArrow ? (
        page === "previous" ? <BsArrowLeft /> : <BsArrowRight />
      ) : (
        page
      )}
    </button>
  );
};