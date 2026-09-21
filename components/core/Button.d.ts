/**
 * Primary action control.
 * @startingPoint section="Core" subtitle="Button variants, sizes and states" viewport="700x190"
 */
export interface ButtonProps {
  /** primary = one per view. accent (hi-vis) only for "Estoy disponible"-class toggles. */
  variant?: "primary" | "secondary" | "ghost" | "accent" | "danger" | "link";
  /** touch = 52px, for mobile app surfaces. */
  size?: "sm" | "md" | "lg" | "touch";
  /** Icon name from the bundled set, rendered before the label. */
  icon?: string;
  iconAfter?: string;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  /** Render as "a" for navigation. */
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
