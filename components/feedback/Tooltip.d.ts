/** Hover/focus label for icon-only controls and verification marks. */
export interface TooltipProps {
  label: string;
  placement?: "top" | "bottom";
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
