/** Round profile image, initials fallback, optional verified check. */
export interface AvatarProps {
  /** Used for initials and as the accessible label. */
  name?: string;
  src?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Icon name to show instead of initials (e.g. "wrench") when there is no photo. */
  trade?: string;
  verified?: boolean;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
