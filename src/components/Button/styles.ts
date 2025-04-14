import styled from "@emotion/styled";

interface ButtonComponentStyledProps {
  danger?: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyledProps>`
  height: fit-content;
  padding: 20px;
  background: ${({ danger }) =>
    danger ? "rgb(205, 29, 29)" : "rgb(200, 187, 42)"};
  /* background-color: rgb(200, 187, 42); */
  border: none;
  border-radius: 12px;
  font-size: 26px;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: rgb(202, 200, 200);
  }
`;
