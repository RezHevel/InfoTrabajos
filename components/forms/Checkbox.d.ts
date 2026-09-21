/** Multi-select option; also used for terms acceptance. */
export interface CheckboxProps {
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
