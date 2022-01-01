import { Typography } from "@mui/material";
import styled from "styled-components";
import logoImg from "../../assets/logo.png";

const Root = styled("div")`
  padding-top: 50px;
  padding-left: 50px;
`;

const Image = styled("img")`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

export const Logo = () => {
  return (
    <Root>
      <Image src={logoImg} />
      <Typography variant="h1" fontSize={20}>
        Сборники Христиан
      </Typography>
    </Root>
  );
};
