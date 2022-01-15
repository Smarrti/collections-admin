import {
  Button,
  CircularProgress,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import styled from "styled-components";
import { Paper } from "../../../ui/paper";
import { SongContentType } from "../../../utils/types/songContent.type";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

type Props = {
  searchResult: SongContentType | "loading";
  searchResultId: string | null;
};

export type addVideoFormValues = {
  videos: {
    title: string;
    id: string;
  }[];
};

const StyledTextField = styled(TextField)`
  margin-right: 20px;
`;

const FireldsRow = styled("div")`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const AddVideoForm: FC<Props> = ({ searchResult, searchResultId }) => {
  const [isSubmitting, setIsSubmmitting] = useState(false);
  if (searchResult === "loading") {
    return (
      <Paper>
        <Skeleton variant="text" height={50} />
        <Skeleton variant="text" height={50} />
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  const initialValues: addVideoFormValues = {
    videos: [
      {
        title: "",
        id: "",
      },
    ],
  };

  const onSubmit = async (
    values: addVideoFormValues,
    formikHelpers: FormikHelpers<addVideoFormValues>
  ) => {
    if (!searchResultId) {
      return;
    }
    try {
      setIsSubmmitting(true);

      const db = getFirestore();

      const docReference = doc(db, "songsOfflineContent", searchResultId);

      await updateDoc(docReference, {
        ...searchResult,
        videosId: [...searchResult.videosId, ...values.videos],
      });
    } catch (e) {
      console.log(e);
    }

    formikHelpers.resetForm();
    setIsSubmmitting(false);
  };

  return (
    <Paper>
      {isSubmitting && <CircularProgress />}
      <Typography variant="h5">Результат поиска</Typography>
      <Typography style={{ marginTop: 10 }}>{searchResult.title}</Typography>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <FieldArray name="videos">
              {({ remove, push }) => (
                <div>
                  {values.videos.length > 0 &&
                    values.videos.map((video, index) => (
                      <FireldsRow key={index}>
                        <StyledTextField
                          id={`video-${index}`}
                          label="Видео ID"
                          variant="outlined"
                          type="text"
                          value={video.id}
                          onChange={(e) =>
                            setFieldValue(`videos[${index}].id`, e.target.value)
                          }
                          disabled={isSubmitting}
                        />
                        <StyledTextField
                          id={`video-${index}`}
                          label="Имя канала"
                          variant="outlined"
                          type="text"
                          value={video.title}
                          onChange={(e) =>
                            setFieldValue(
                              `videos[${index}].title`,
                              e.target.value
                            )
                          }
                          disabled={isSubmitting}
                        />
                        <Button
                          type="button"
                          onClick={() => remove(index)}
                          disabled={isSubmitting}
                        >
                          Удалить
                        </Button>
                      </FireldsRow>
                    ))}
                  <Button
                    type="button"
                    className="secondary"
                    onClick={() => push({ id: "", title: "" })}
                    disabled={isSubmitting}
                  >
                    Добавить еще
                  </Button>
                </div>
              )}
            </FieldArray>
            <Button type="submit" disabled={isSubmitting}>
              Отправить
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
