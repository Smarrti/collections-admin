import { Typography } from "@mui/material";
import { FC } from "react";
import { Paper } from "../../ui/paper";
import { RootScreen } from "../../ui/rootScreen";

export const Main: FC = () => {
  return (
    <RootScreen>
      <Paper>
        <Typography>Привет</Typography>
      </Paper>
    </RootScreen>
  );
};
