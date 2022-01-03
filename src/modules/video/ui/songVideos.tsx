import { Skeleton, Typography } from "@mui/material";
import { Formik } from "formik";
import { FC } from "react";
import { Paper } from "../../../ui/paper";
import { SongContentType } from "../../../utils/types/songContent.type";
import { VideoIframe } from "./videoIframe";

type Props = {
  searchResult: SongContentType | "loading";
};

export type addVideoFormValues = {
  videos: {
    title: string;
    url: string;
  }[];
};

export const SongVideos: FC<Props> = ({ searchResult }) => {
  const initialValues: addVideoFormValues = {
    videos: [
      {
        title: "",
        url: "",
      },
    ],
  };

  if (searchResult === "loading") {
    return (
      <Paper>
        <Skeleton variant="text" height={50} />
        <Skeleton variant="rectangular" height={300} />
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  return (
    <Paper>
      <Typography variant="h5">Добавленные видео</Typography>
      {searchResult.videosId.map((item) => (
        <VideoIframe video={item} />
      ))}
    </Paper>
  );
};
