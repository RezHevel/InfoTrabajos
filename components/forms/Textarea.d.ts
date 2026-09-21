/** Multi-line input for job descriptions and reviews. */
export interface TextareaProps {
  rows?: number;
  invalid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
