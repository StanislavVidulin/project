import { useContext } from "react";
import { AddressContainer, Title, UserAvatar, UserDataWrapper } from "./styles";
import { UserContext } from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";

function UserData() {
  
  const { userData, getUser } = useContext(UserContext);

  return (
    <UserDataWrapper>
      <Title>
        {userData?.titleName} {userData?.firstName} {userData?.lastName}
      </Title>
      <UserAvatar src={userData?.picture} alt="user avatar" />
      <AddressContainer>
        {userData?.country}
        {userData?.country && userData?.city ? ", " : ""}
        {userData?.city}
      </AddressContainer>
      <Button name="GET ANOTHER USER" onClick={getUser} />
    </UserDataWrapper>
  );
}

export default UserData;
