import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { createContext, useState } from "react";

import {
  LayoutProps,
  NavLinkObj,
  UserContextInterface,
  userInfo,
} from "./types";
import { navLinksData } from "./data";
import {
  StyledNavLink,
  LayoutComponent,
  Header,
  Nav,
  Main,
  Footer,
  Ticker,
  LogoImage,
  LeftItems,
} from "./styles";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";

export const UserContext = createContext<UserContextInterface>({
  userData: undefined,
  error: undefined,
  isLoading: false,
  getUser: () => {},
  userCard: [],
  changeCard: () => {}
});

function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<userInfo>({
    titleName: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    picture: "",
  });
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userCard, setUserCard] = useState<userInfo[]>([]);

  const GET_USER_URL: string = "https://randomuser.me/api/";

  const navigate = useNavigate();

  const goToLastPage = () => {
    navigate(-1);
  };

  const getUser = async () => {
    setError(undefined);

    try {
      setIsLoading(true);
      const response = await axios.get(GET_USER_URL);
      const data = response.data.results[0];
      setUserData(data);
      navigate("/userData");

      const user = {
        titleName: data.name.title,
        firstName: data.name.first,
        lastName: data.name.last,
        country: data.location.country,
        city: data.location.city,
        picture: data.picture.medium,
      }

      setUserData(user);
      setUserCard((prevCard) => [...prevCard, user]);
      
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink
        key={v4()}
        to={navLink.to}
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        {navLink.linkName}
      </StyledNavLink>
    );
  });

  return (
    <UserContext.Provider
      value={{
        userData,
        error,
        isLoading,
        getUser,
        userCard,
        changeCard: setUserCard
      }}
    >
      <LayoutComponent>
        <Header>
          <LeftItems>
            <Link to="/">
              <LogoImage src={Logo}></LogoImage>
            </Link>
            <Button name="< GO BACK" onClick={goToLastPage} />
          </LeftItems>
          <Link to="/"></Link>
          <Nav>{navLinks}</Nav>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <Ticker>
            Dream Team: Iryna Oleinikova, Anna Moiseieva, Olha Oliinyk, Larissa
            Frescher, Stanislav Vidulin
          </Ticker>
        </Footer>
      </LayoutComponent>
    </UserContext.Provider>
  );
}

export default Layout;
