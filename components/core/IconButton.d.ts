/** Square icon-only control for toolbars, headers and card corners. */
export interface IconButtonProps {
  icon: string;
  /** Required accessible label — there is no visible text. */
  label: string;
  variant?: "plain" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
  /** Shows an unread dot (notifications, messages). */
  badge?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
