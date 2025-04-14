import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

function Button({ name, onClick, disabled = false, type = 'submit', danger }: ButtonProps) {
  return ( 
  <ButtonComponent
    onClick={onClick} 
    disabled={disabled}
    type={type}
    danger={danger}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
