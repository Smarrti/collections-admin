import { Typography } from "@mui/material";
import styled from "styled-components";

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
      <Image src="/src/assets/logo.png" />
      <Typography variant="h1" fontSize={20}>
        Сборники Христиан
      </Typography>
    </Root>
  );
};
