/** Mobile bottom navigation, 5 items max, 52px minimum tap height. */
export interface TabBarItem { value: string; label: string; icon: string; badge?: boolean }
export interface TabBarProps {
  items?: TabBarItem[];
  value?: string;
  onChange?: (value: string) => void;
}
export declare function TabBar(props: TabBarProps): JSX.Element;
