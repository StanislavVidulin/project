import { ErrorMessage, InputComponent, InputContainer, Label} from "./styles";
import { InputProps } from "./types";

function Input({
  placeholder, 
  name, 
  value, 
  type='text', 
  onChange, 
  label, 
  id,
  error,
}: InputProps) {
  return (
    <InputContainer>
    <Label htmlFor={id}>{label}</Label>
    <InputComponent
     name={name}
     placeholder={placeholder}
     value={value}
     onChange={onChange}
     type={type}
     id={id}
     />
     <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}

export default Input;
