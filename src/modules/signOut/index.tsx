import { getAuth, signOut } from "firebase/auth";
import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../utils/context/userContext";

export const SignOut: FC = () => {
  const userContext = useContext(UserContext)
  const auth = getAuth();
  signOut(auth);
  userContext?.setUserInfo(undefined)

  return <Navigate replace to="/" />;
};
