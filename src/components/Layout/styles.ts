import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #afc5de;
`;

export const LogoImage = styled.img`
  width: 60px;
  border-radius: 50%;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  /* &:hover {
    background-color: grey;
  } */
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  color: #572802;
  font-weight: bold;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  background-image: linear-gradient(
    to right,
    rgb(4, 1, 19),
    rgb(171, 194, 240)
  );
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  background-color: #afc5de;
  color: #572802;
`;

export const ButtonContainer = styled.div`
  width: 50px;
`;

export const Ticker = styled.div`
  white-space: nowrap;
  display: inline-block;
  padding-left: 100%;
  animation: scroll 20s linear infinite;
  color: #572802;
  font-size: 30px;
  font-weight: bold;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
