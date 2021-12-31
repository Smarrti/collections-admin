import { Box } from "@mui/material";
import styled from "styled-components";
import { Logo } from "./logo";
import { MenuLinks } from "./menuLinks";

const Root = styled(Box)`
  height: 100%;
`;

export const Sidebar = () => {
  return (
    <Root sx={{ borderRight: 1, borderColor: "grey.200" }}>
      <Logo />
      <MenuLinks />
    </Root>
  );
};
