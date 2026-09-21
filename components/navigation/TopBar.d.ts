/** App screen header: optional back chevron, title, right-hand actions. */
export interface TopBarProps {
  title?: React.ReactNode;
  subtitle?: string;
  back?: boolean;
  onBack?: () => void;
  actions?: React.ReactNode;
  /** Sticky with a translucent blurred veil (default). */
  sticky?: boolean;
}
export declare function TopBar(props: TopBarProps): JSX.Element;
