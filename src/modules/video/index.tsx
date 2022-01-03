import { Typography } from "@mui/material";
import { FC, useState } from "react";
import styled from "styled-components";
import { Paper } from "../../ui/paper";
import { RootScreen } from "../../ui/rootScreen";
import { SongContentType } from "../../utils/types/songContent.type";
import { AddVideoForm } from "./ui/addVideoForm";
import { SearchSongForm } from "./ui/searchSongForm";
import { SongVideos } from "./ui/songVideos";

const StyledTypography = styled(Typography)`
  margin-bottom: 20px;
`;

export const Video: FC = ({}) => {
  const [searchResult, setSearchResult] = useState<
    SongContentType | undefined | "loading"
  >();

  return (
    <RootScreen>
      <Paper>
        <StyledTypography variant="h5">Видео</StyledTypography>
        <SearchSongForm setSearchResult={setSearchResult} />
      </Paper>

      {searchResult && <AddVideoForm searchResult={searchResult} />}
      {searchResult && <SongVideos searchResult={searchResult} />}
    </RootScreen>
  );
};
