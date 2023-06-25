import type { Component } from "#/lib/utils/component";
import { s } from "#/lib/utils/style/class";
import type { PaginationItemProps } from "./pagination-item.type";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const PaginationItem: Component<PaginationItemProps> = ({ page, active, handlePageChange }) => {
  const isArrow = typeof page !== "number";

  const styles = s(
    "flex items-center justify-center",
    "border border-background-gray-700",
    "h-10 w-10 rounded",
    "selection:select-none"
  );

  const pageStyles = s(styles, {
    "bg-primary-500 text-white": active,
    "text-gray-500 hover:bg-primary-500": !active
  });

  const arrowStyles = s(styles, "text-gray-500", {
    "bg-background-gray-700": active,
    "hover:bg-primary-500": !active
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