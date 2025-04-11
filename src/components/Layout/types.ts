import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLinkObj {
  to: string;
  linkName: string;
}

export interface UserContextInterface {
  userData: any;
  error: string | undefined;
  isLoading: boolean;
  getUser: () => void;
}