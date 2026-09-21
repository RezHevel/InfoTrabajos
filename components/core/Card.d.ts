/**
 * Surface container: 1px border, 10px radius, shadow-1. The default box for
 * listings, requests and panels.
 */
export interface CardProps {
  as?: "div" | "article" | "li" | "a";
  padding?: "none" | "sm" | "md" | "lg";
  /** Adds hover lift + pointer. Use for whole-card links. */
  interactive?: boolean;
  /** Zero padding — for cards whose first child is an image or list. */
  flush?: boolean;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
export interface CardSectionProps { children?: React.ReactNode }
/** Hairline-divided footer/extra row inside a flush Card. */
export declare function CardSection(props: CardSectionProps): JSX.Element;
