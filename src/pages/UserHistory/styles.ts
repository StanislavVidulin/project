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
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const CardComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
  background-color: white;
  padding: 30px;
  max-width: 100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(
    to right,
    rgb(4, 1, 19),
    rgb(171, 194, 240)
  );
  color: white;
`;

export const UserName = styled.p`
`;

export const UserCountry = styled.p`
`;

export const UserCity = styled.p`
`;