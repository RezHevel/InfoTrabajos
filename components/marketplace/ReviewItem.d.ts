/** One review in a profile's review list. */
export interface ReviewItemProps {
  author: string;
  photo?: string;
  rating?: number;
  /** Formatted date, e.g. "mar 2026". */
  date?: string;
  /** What the job was, e.g. "Instalación de tablero". */
  job?: string;
  text?: string;
  /** Marks a review tied to a completed job on the platform. */
  verified?: boolean;
}
export declare function ReviewItem(props: ReviewItemProps): JSX.Element;
