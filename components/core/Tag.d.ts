/** Pill-shaped, selectable chip: category filters, skills on a profile. */
export interface TagProps {
  selected?: boolean;
  icon?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Renders a dismiss x — for applied filters. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
