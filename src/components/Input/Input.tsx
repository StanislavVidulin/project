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
  search,
  error,
  checked
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
     isSearch = {search}
     checked={checked}
     />
     <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}

export default Input;
