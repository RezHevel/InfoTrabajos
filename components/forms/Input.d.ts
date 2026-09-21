/** Single-line text input. Wrap in Field for a label. */
export interface InputProps {
  /** Leading icon name. */
  icon?: string;
  /** Trailing static text, e.g. "/ hora" or "km". */
  suffix?: string;
  invalid?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Input(props: InputProps): JSX.Element;
