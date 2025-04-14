import { useContext } from "react";
import { UserContext } from "../../components/Layout/Layout";
import { v4 } from "uuid";

import { CardComponent, CardInfo, UserAvatar, UserCity, UserCountry, UserHistoryWrapper, UserName } from "./styles";
import Button from "../../components/Button/Button";
import { userInfo } from "../../components/Layout/types";

function UserHistory () {

    const { userCard, changeCard} = useContext(UserContext);

    const deleteAllData = () => {
      changeCard([]);
    }

    const deleteCard = (picture: string) => {
      const newUserList = userCard.filter((card) => card.picture !== picture);
      changeCard(newUserList);
    }

    const usersList = userCard.map((userCard: userInfo) => {
        return (
          <CardComponent key={v4()}>
            <UserAvatar src={userCard.picture}/>
            <UserName>
            Name: {userCard.firstName} {userCard.lastName}
            </UserName>
            <UserCountry>
            Country: {userCard.country}
            </UserCountry>
            <UserCity>
            City: {userCard.city}
            </UserCity>
            <Button name="DELETE CARD" onClick={() => deleteCard(userCard.picture)}/>
          </CardComponent>
        )
      })

    return (
        <UserHistoryWrapper>
            {userCard.length !== 0 && <Button name="DELETE ALL" onClick={deleteAllData} danger/>}
            <CardInfo>
            {usersList}
            </CardInfo>
        </UserHistoryWrapper>
    )
}

export default UserHistory;