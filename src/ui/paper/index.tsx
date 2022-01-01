import { FC } from "react";
import styled from "styled-components";
import { Paper as MPaper } from "@mui/material";

type Props = {};

const Root = styled(MPaper)`
  margin-bottom: 30px;
  min-width: 400px;
  min-height: 50px;
`;

const Container = styled("div")`
  padding: 30px;
`;

export const Paper: FC<Props> = ({ children }) => {
  return (
    <Root>
      <Container>{children}</Container>
    </Root>
  );
};
