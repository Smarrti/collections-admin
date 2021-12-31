import { Grid } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { RoutesScreen } from "../../routes";
import { Sidebar } from "../sidebar";

const GridContent = styled(Grid)`
  overflow-y: scroll;
  height: 100vh;
`;

export const RootGrid: FC = ({}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <GridContent item xs={9}>
        <RoutesScreen />
      </GridContent>
    </Grid>
  );
};
