import styled from "@emotion/styled";

export const UserHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 40px;
  padding: 60px;
`;

export const CardInfo = styled.div`
`;

export const UserAvatar = styled.img`
  width: 250px;
  height: 250px;
  /* border-radius: 50%; */
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const CardComponent = styled.div`
  margin: 16px;
  background-color: white;
  padding: 30px;
  max-width: 100%;
`;