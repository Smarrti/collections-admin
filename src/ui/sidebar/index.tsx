import { Box } from "@mui/material";
import styled from "styled-components";
import { Logo } from "./logo";

const Image = styled("img")`
  width: 100px;
  height: 100px;
`;

export const Sidebar = () => {
  return (
    <Box
      sx={{ borderRight: 1, borderColor: "grey.200" }}
      style={{ height: "100vh" }}
    >
      <Logo />
    </Box>
  );
};
