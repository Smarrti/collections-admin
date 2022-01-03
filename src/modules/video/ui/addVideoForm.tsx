import { Skeleton, Typography } from "@mui/material";
import { Formik } from "formik";
import { FC } from "react";
import { Paper } from "../../../ui/paper";
import { SongContentType } from "../../../utils/types/songContent.type";

type Props = {
  searchResult: SongContentType | "loading";
};

export type addVideoFormValues = {
  videos: {
    title: string;
    url: string;
  }[];
};

export const AddVideoForm: FC<Props> = ({ searchResult }) => {
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
        <Skeleton variant="text" height={50} />
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  return (
    <Paper>
      <Typography variant="h5">Результат поиска</Typography>
      <Typography style={{ marginTop: 10 }}>{searchResult.title}</Typography>
      {/* <Formik initialValues={initialValues}></Formik> */}
    </Paper>
  );
};
