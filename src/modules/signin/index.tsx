import { Button, Typography } from "@mui/material";
import { FC, useContext } from "react";
import styled from "styled-components";
import { Paper } from "../../ui/paper";
import { RootScreen } from "../../ui/rootScreen";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from "../../utils/context/userContext";
import { checkUser } from "./checkUser";
import { FirebaseContext } from "../../utils/context/firebaseContext";

const ButtonContainer = styled("div")`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;

export const SignIn: FC = () => {
  const userContext = useContext(UserContext)
  const firebaseContext = useContext(FirebaseContext)

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleClick = async () => {
    if (!firebaseContext) {
      return
    }

    const { user } = await signInWithPopup(auth, provider);
    const userInfo = await checkUser(user, firebaseContext)
    userContext?.setUserInfo(userInfo)
  };

  return (
    <RootScreen>
      <Paper>
        <Typography>Авторизация через Google</Typography>
        <ButtonContainer>
          <Button variant="outlined" onClick={handleClick}>
            Войти через Google
          </Button>
        </ButtonContainer>
      </Paper>
    </RootScreen>
  );
};
