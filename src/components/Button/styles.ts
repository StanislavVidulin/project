import styled from "@emotion/styled";

interface ButtonComponentStyledProps {
  danger?: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyledProps>`
  /* width: 100%; */
  height: fit-content;
  padding: 20px;
  background: ${({ danger }) =>
    danger ? "rgb(250, 5, 5)" : "rgb(17, 48, 127)"};
  border: none;
  border-radius: 6px;
  font-size: 26px;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: rgb(202, 200, 200);
  }
`;
