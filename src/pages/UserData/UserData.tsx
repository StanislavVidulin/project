import { useContext } from "react";
import { AddressContainer, Title, UserAvatar, UserDataWrapper } from "./styles";
import { UserContext } from "../../components/Layout/Layout";

function UserData() {
  const { userData } = useContext(UserContext);

  return (
    <UserDataWrapper>
      <Title>
        {userData?.name?.title} {userData?.name?.first} {userData?.name?.last}
      </Title>
      <UserAvatar src={userData?.picture?.medium} alt="user avatar" />
      <AddressContainer>
        {userData?.location?.country}
        {userData?.location?.country && userData?.location?.city ? ',' : ''}
        {userData?.location?.city}
      </AddressContainer>
    </UserDataWrapper>
  );
}

export default UserData;
