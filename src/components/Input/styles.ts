import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  font-size: 18px;
  border-radius: 6px;
`;

export const Label = styled.label`
  font-size: 26px;
  color: white;
`;

export const ErrorMessage = styled.div`
height: 20px;
font-size: 18px;
color: red;
`;