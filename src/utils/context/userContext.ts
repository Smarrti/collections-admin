import React from 'react'
import { createContext } from "react";
import { UserInfo } from "../types/userInfo.type";

type UserContexType = {
  userInfo: UserInfo | undefined
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | undefined>>
}

export const UserContext = createContext<UserContexType | undefined>(undefined);
