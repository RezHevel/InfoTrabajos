/**
 * Five-star score with optional numeric value and review count.
 * Stars are the only place hi-vis yellow is used as a fill.
 */
export interface RatingProps {
  /** 0–5, fractional values render a partial star. */
  value?: number;
  /** Review count, shown in parentheses. */
  count?: number;
  /** Star pixel size. 13 in dense lists, 15 default, 20 on profiles. */
  size?: number;
  showValue?: boolean;
}
export declare function Rating(props: RatingProps): JSX.Element;
