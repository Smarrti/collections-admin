import { Grid } from "@mui/material";
import React, { FC } from "react";
import { Sidebar } from "../sidebar";

type Props = {};

export const RootGrid: FC<Props> = ({}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} />
    </Grid>
  );
};
