import type { CSSProperties } from "react";
/**
 * Single-glyph icon from the bundled Lucide set (assets/icons).
 * @dsComponent
 */
export interface IconProps {
  /** File stem from assets/icons, e.g. "wrench", "map-pin", "star". */
  name: string;
  /** Pixel box. 16 inline, 20 default UI, 24 nav, 32+ category tiles. */
  size?: number;
  strokeWidth?: number;
  /** Accessible name. Omit for decorative icons next to text. */
  label?: string;
  style?: CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element | null;
