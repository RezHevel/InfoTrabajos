/**
 * On/off toggle for settings and availability. Green when on — reserve clay
 * for actions, not states.
 */
export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Switch(props: SwitchProps): JSX.Element;
