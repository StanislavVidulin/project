import { useContext } from "react";
import { Title, UserDataWrapper } from "./styles";
import { UserContext } from "../../components/Layout/Layout";

function UserData () {
    const { userData } = useContext(UserContext);

    return (
        <UserDataWrapper>
            <Title>{userData?.name?.first}</Title>
        </UserDataWrapper>
    )
}

export default UserData;