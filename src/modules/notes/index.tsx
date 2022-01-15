import { Typography } from "@mui/material";
import { FC, useState } from "react";
import styled from "styled-components";
import { Paper } from "../../ui/paper";
import { RootScreen } from "../../ui/rootScreen";
import { SearchSongForm } from "../../ui/searchSongForm";
import { SongContentType } from "../../utils/types/songContent.type";
import { AddNotesForm } from "./ui/addNotesForm";
import { NotesList } from "./ui/notesList";

const StyledTypography = styled(Typography)`
  margin-bottom: 20px;
`;

export const Notes: FC = ({}) => {
  const [searchResult, setSearchResult] = useState<
    SongContentType | undefined | "loading" | "not found"
  >();
  const [searchResultId, setSearchResultId] = useState<string | null>(null);

  return (
    <RootScreen>
      <Paper>
        <StyledTypography variant="h5">Ноты</StyledTypography>
        <SearchSongForm
          setSearchResult={setSearchResult}
          setSearchResultId={setSearchResultId}
        />
      </Paper>

      {searchResult && searchResult !== "not found" && (
        <AddNotesForm
          searchResult={searchResult}
          searchResultId={searchResultId}
        />
      )}

      {searchResult && <NotesList searchResult={searchResult} />}
    </RootScreen>
  );
};
