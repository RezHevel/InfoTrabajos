/**
 * A client job request as seen in the workers' feed and the client's history.
 * @startingPoint section="Marketplace" subtitle="Job request card" viewport="700x240"
 */
export interface RequestCardProps {
  title: string;
  category?: string;
  zone?: string;
  /** Formatted budget, e.g. "$60.000". */
  budget?: string;
  /** Relative time string, e.g. "hace 2 h". */
  posted?: string;
  state?: "abierta" | "en_curso" | "finalizada" | "cancelada";
  /** Number of workers who applied. */
  offers?: number;
  urgent?: boolean;
  description?: string;
  onOpen?: () => void;
}
export declare function RequestCard(props: RequestCardProps): JSX.Element;
