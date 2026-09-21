/** Single metric for the worker dashboard and admin panel. */
export interface StatTileProps {
  label: string;
  value: React.ReactNode;
  /** Change string, e.g. "+12% vs. mes pasado". A leading "-" turns it red. */
  delta?: string;
  icon?: string;
  tone?: "neutral" | "brand";
}
export declare function StatTile(props: StatTileProps): JSX.Element;
