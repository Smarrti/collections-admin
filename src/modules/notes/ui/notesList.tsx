import { Skeleton, Typography } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { Paper } from "../../../ui/paper";
import { SongContentType } from "../../../utils/types/songContent.type";

type Props = {
  searchResult: SongContentType | "loading" | "not found";
};

const NoteWrapper = styled("div")`
  margin: 10px 0;
`;

export const NotesList: FC<Props> = ({ searchResult }) => {
  if (searchResult === "loading") {
    return (
      <Paper>
        <Skeleton variant="text" height={50} />
        <Skeleton variant="rectangular" height={300} />
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  if (searchResult === "not found") {
    return (
      <Paper>
        <Typography>Ничего не найдено</Typography>
      </Paper>
    );
  }

  return (
    <Paper>
      <Typography variant="h5">Добавленные ноты</Typography>
      {!!searchResult.notesSources.length && (
        <NoteWrapper>
          <Typography>Источник {searchResult.notesSources[0].title}</Typography>
          <a href={searchResult.notesSources[0].url} target="_blank">
            {searchResult.notesSources[0].url}
          </a>
        </NoteWrapper>
      )}

      {searchResult.notes.map((note, index) => (
        <NoteWrapper key={index}>
          <Typography>{note.title}</Typography>
          <a href={note.url} target="_blank">
            {note.url}
          </a>
        </NoteWrapper>
      ))}
    </Paper>
  );
};
