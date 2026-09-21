/** Label + hint/error wrapper around any form control. */
export interface FieldProps {
  label?: string;
  hint?: string;
  /** Replaces hint and turns the message red. */
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
