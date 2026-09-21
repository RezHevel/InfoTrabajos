/** Transient confirmation, bottom-centre on app, bottom-right on web. */
export interface ToastProps {
  tone?: "neutral" | "go" | "stop";
  /** Optional single action, e.g. { label: "Deshacer", onClick }. */
  action?: { label: string; onClick: () => void };
  onClose?: () => void;
  children?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
