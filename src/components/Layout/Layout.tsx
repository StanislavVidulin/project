import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

import { LayoutProps, NavLinkObj, UserContextInterface } from "./types";
import { navLinksData } from "./data";
import {
  StyledNavLink,
  LayoutComponent,
  Header,
  Nav,
  Main,
  Footer,
  Ticker,
} from "./styles";
import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext<UserContextInterface>({
  userData: undefined,
  error: undefined,
  isLoading: false,
  getUser: () => {},
});

function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<any>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const GET_USER_URL: string = "https://randomuser.me/api/";

  const navigate = useNavigate();

  const getUser = async () => {
    setError(undefined);

    try {
      setIsLoading(true);
      const response = await axios.get(GET_USER_URL);
      const data = response.data.results[0];
      setUserData(data);
      navigate("/userData");
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
      }}
    >
      <LayoutComponent>
        <Header>
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
