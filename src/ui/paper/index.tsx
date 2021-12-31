import { FC } from "react";
import styled from "styled-components";
import { Paper as MPaper } from "@mui/material";

type Props = {};

const Root = styled(MPaper)`
  margin-bottom: 30px;
`;

const Container = styled("div")`
  max-width: 700px;
  min-width: 400px;
  width: 700px;
  min-height: 50px;
  padding: 30px;
`;

export const Paper: FC<Props> = ({ children }) => {
  return (
    <Root>
      <Container>{children}</Container>
    </Root>
  );
};
