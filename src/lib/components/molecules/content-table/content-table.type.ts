export type ContentTableProps = {
  items: string[];
};

export type ContentTableItemProps = {
  item: string;
  active: boolean;
  handleClick: () => void;
};