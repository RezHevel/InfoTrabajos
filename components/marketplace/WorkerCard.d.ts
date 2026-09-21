/**
 * A worker in a results list: photo, trade, zone, rating, rate, availability.
 * The most repeated object in the product.
 * @startingPoint section="Marketplace" subtitle="Worker result card" viewport="700x260"
 */
export interface WorkerCardProps {
  name: string;
  /** Trade label, e.g. "Electricista". */
  trade: string;
  /** Icon name for the trade (wrench, zap, hammer, paint-roller...). */
  tradeIcon?: string;
  photo?: string;
  rating?: number;
  reviews?: number;
  /** Formatted distance, e.g. "2,4 km". */
  distance?: string;
  /** Neighbourhood or city. */
  zone?: string;
  /** Formatted rate string, e.g. "$4.500/h". */
  rate?: string;
  available?: boolean;
  verified?: boolean;
  /** Up to 4 short skill chips. */
  skills?: string[];
  onContact?: () => void;
  onClick?: () => void;
  layout?: "row" | "stacked";
}
export declare function WorkerCard(props: WorkerCardProps): JSX.Element;
