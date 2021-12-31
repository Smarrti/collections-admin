import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

const Root = styled(Box)`
  max-height: 100%;
  height: 100%;
  background-color: ${grey[100]};
  display: flex;
  flex-direction: column;
  padding: 50px 90px 0;
  overflow-y: scroll;
`;

export const RootScreen: FC<Props> = ({ children }) => {
  return <Root>{children}</Root>;
};
