import styled from "@emotion/styled";

export const LoginFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 600px;
  width: 50%;
  padding: 40px;
  background-image: linear-gradient(
    to right,
    rgb(4, 1, 19),
    rgb(171, 194, 240)
  );
  padding: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  /* border: 2px solid black; */
  border-radius: 12px;
`;

export const Title = styled.div`
  align-self: center;
  font-size: 40px;
  font-weight: bold;
  color: rgb(201, 186, 22);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorContainer = styled.div`
  font-weight: bold;
  color: red;
  font-size: 30px;
`;
