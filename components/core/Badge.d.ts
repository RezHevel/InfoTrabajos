/** Status label: verification, availability, job state. */
export interface BadgeProps {
  tone?: "neutral" | "brand" | "go" | "warn" | "stop" | "info" | "accent";
  icon?: string;
  /** Leading dot instead of an icon — used for availability. */
  dot?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
