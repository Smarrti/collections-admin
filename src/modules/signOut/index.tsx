import { getAuth, signOut } from "firebase/auth";
import { FC } from "react";
import { Navigate } from "react-router-dom";

export const SignOut: FC = () => {
  const auth = getAuth();
  signOut(auth);

  return <Navigate replace to="/" />;
};
