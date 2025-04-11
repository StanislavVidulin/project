import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

import { LayoutProps, NavLinkObj, UserContextInterface } from "./types";
import { navLinksData } from "./data";
import { StyledNavLink, LayoutComponent, Header, Nav, Main, Footer, LogoText } from "./styles";
import axios from "axios";
import { createContext, useState } from "react";
import Button from "../Button/Button";

export const UserContext = createContext<UserContextInterface>({
  userData: undefined,
  error: undefined,
  isLoading: false,
  getUser: () => {}
}) 

function Layout({ children }: LayoutProps) {

  const [userData, setUserData] = useState<any>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const GET_USER_URL: string = 'https://randomuser.me/api/';

  const getUser = async () => {

    try {
      const response = await axios.get(GET_USER_URL);
      setUserData(response.data.results[0]);
      setIsLoading(true);
    } catch(error: any) {
      setError(error.message);
    } finally {
      // setIsLoading(false);
    }

  }

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
    <UserContext.Provider value={{
      userData, error, isLoading, getUser
    }}>
      <LayoutComponent>
        <Header>
          <Link to="/">
          </Link>
          <Nav>
            {navLinks}
          </Nav>
        </Header>
        <Main>{children}
        </Main>
        <Footer>
          <LogoText>Company name</LogoText>
        </Footer>
      </LayoutComponent>
      </UserContext.Provider>
  );
}

export default Layout;