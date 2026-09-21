/**
 * Modal. Positioned absolutely inside the nearest positioned ancestor so it
 * works inside phone mocks; set sheet for the mobile bottom-sheet variant.
 */
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  description?: string;
  onClose?: () => void;
  /** Action row, right aligned. */
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  /** Bottom sheet with drag handle — the mobile app pattern. */
  sheet?: boolean;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
