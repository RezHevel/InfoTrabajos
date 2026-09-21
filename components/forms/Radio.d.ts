/** Single-choice option — account type, urgency, payment method. */
export interface RadioProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Radio(props: RadioProps): JSX.Element;
export interface RadioGroupProps { children?: React.ReactNode }
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
