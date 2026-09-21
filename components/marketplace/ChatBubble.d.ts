/** Message bubble for the client↔worker chat. */
export interface ChatBubbleProps {
  from?: "me" | "them";
  /** Short time string, e.g. "10:42". */
  time?: string;
  /** Adds "· Leído" on own messages. */
  read?: boolean;
  children?: React.ReactNode;
}
export declare function ChatBubble(props: ChatBubbleProps): JSX.Element;
