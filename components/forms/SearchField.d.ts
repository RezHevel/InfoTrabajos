/**
 * The marketplace search bar: query, optional location segment, filter affordance.
 * @startingPoint section="Forms" subtitle="Search bar with location and filters" viewport="700x150"
 */
export interface SearchFieldProps {
  placeholder?: string;
  /** Location text shown in the right-hand segment, e.g. "Córdoba Capital". */
  location?: string;
  /** Shows the filter icon button. */
  onFilters?: () => void;
  size?: "md" | "lg";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
