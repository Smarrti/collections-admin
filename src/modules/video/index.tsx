import { Typography } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { Paper } from "../../ui/paper";
import { RootScreen } from "../../ui/rootScreen";
import { SearchSongForm } from "./ui/searchSongForm";

const StyledTypography = styled(Typography)`
  margin-bottom: 20px;
`;

export const Video: FC = ({}) => {
  return (
    <RootScreen>
      <Paper>
        <StyledTypography variant="h5">Видео</StyledTypography>
        <SearchSongForm />
      </Paper>
    </RootScreen>
  );
};
