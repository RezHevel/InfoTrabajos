/**
 * Trade category entry point — home grids on both web and app.
 * @startingPoint section="Marketplace" subtitle="Trade category grid tile" viewport="700x170"
 */
export interface CategoryTileProps {
  /** Trade glyph: wrench, zap, hammer, brick-wall, paint-roller, sprout, spray-can, droplets. */
  icon?: string;
  label: string;
  /** Number of professionals in the category. */
  count?: number;
  selected?: boolean;
  onClick?: () => void;
}
export declare function CategoryTile(props: CategoryTileProps): JSX.Element;
