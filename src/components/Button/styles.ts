import styled from "@emotion/styled";

export const ButtonComponent = styled.button`
  height: fit-content;
  padding: 20px;
  background-color: rgb(200, 187, 42);
  border: none;
  border-radius: 6px;
  font-size: 26px;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: rgb(202, 200, 200);
  }
`;
