import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-self: center;
  border: 4px solid rgba(0,0,0,0.1);
  border-left-color: rgb(28, 8, 106);
  animation: spin 1s linear infinite;

  @keyframes spin {
    to{
        transform: rotate(360deg)
    }
  }
`;
