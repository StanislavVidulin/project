import { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLinkObj {
  to: string;
  linkName: string;
}

export interface UserContextInterface {
  userData: userInfo | undefined;
  error: string | undefined;
  isLoading: boolean;
  getUser: () => void;
  changeCard: (() => void) | Dispatch<SetStateAction<userInfo[]>>
  userCard: userInfo[];
}

export interface userInfo {
  titleName: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  picture: string;
}