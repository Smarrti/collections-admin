import { Button, Typography } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { Paper } from "../../ui/paper";
import { RootScreen } from "../../ui/rootScreen";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const ButtonContainer = styled("div")`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;

export const SignIn: FC = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        debugger;
      });
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
