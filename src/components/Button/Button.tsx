import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

function Button({ name, onClick, disabled = false, type = 'submit' }: ButtonProps) {
  return ( 
  <ButtonComponent
    onClick={onClick} 
    disabled={disabled}
    type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
