import { createContext } from "react";
import { UserInfo } from "../types/userInfo.type";

export const UserContext = createContext<UserInfo | undefined>(undefined);
