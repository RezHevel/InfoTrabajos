/** Underlined in-page tabs with a 3px clay indicator. */
export interface TabItem { value: string; label: string; count?: number }
export interface TabsProps {
  items?: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
