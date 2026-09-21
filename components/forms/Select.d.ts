/** Native select with brand chrome. */
export interface SelectOption { value: string; label: string }
export interface SelectProps {
  options?: (SelectOption | string)[];
  placeholder?: string;
  invalid?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export declare function Select(props: SelectProps): JSX.Element;
