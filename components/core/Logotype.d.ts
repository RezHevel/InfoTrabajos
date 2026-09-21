/**
 * The InfoTrabajos logo, from the real asset files in assets/.
 * Never substitute type for the mark and never recolor it.
 */
export interface LogotypeProps {
  /** lockup = mark + wordmark + tagline · mark = symbol only · word = wordmark + tagline · word-only = wordmark. */
  variant?: "lockup" | "mark" | "word" | "word-only";
  /** Rendered height in px. Wordmark 18–24 in headers, lockup 90+ on splash. */
  height?: number;
  /** Path to the assets folder, relative to the page. Default "assets". */
  base?: string;
  /** Wraps the logo in a white tile — required on navy/auth surfaces. */
  tile?: boolean;
}
export declare function Logotype(props: LogotypeProps): JSX.Element;
