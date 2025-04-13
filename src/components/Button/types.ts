export interface ButtonProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}
