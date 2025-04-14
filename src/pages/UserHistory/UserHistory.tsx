import { useContext } from "react";
import { UserContext } from "../../components/Layout/Layout";

import { CardComponent, CardInfo, UserAvatar, UserHistoryWrapper } from "./styles";
import Button from "../../components/Button/Button";
import { userInfo } from "../../components/Layout/types";

function UserHistory () {

    const { userCard, changeCard} = useContext(UserContext);

    const deleteAllData = () => {
      changeCard([]);
    }

    const usersList = userCard.map((userCard: userInfo) => {
        return (
          <CardComponent>
            <UserAvatar src={userCard.picture}/>
            Name: {userCard.firstName} {userCard.lastName}
            Country: {userCard.country}
            City: {userCard.city}
            <Button name="DELETE CARD"/>
          </CardComponent>
        )
      })

    return (
        <UserHistoryWrapper>
            <CardInfo>
            {usersList}
            </CardInfo>
            {userCard.length !== 0 && <Button name="DELETE ALL" onClick={deleteAllData} danger/>}
        </UserHistoryWrapper>
    )
}

export default UserHistory;