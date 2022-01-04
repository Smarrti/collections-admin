import { Button, Skeleton, TextField, Typography } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import { FC } from "react";
import styled from "styled-components";
import { Paper } from "../../../ui/paper";
import { SongContentType } from "../../../utils/types/songContent.type";

type Props = {
  searchResult: SongContentType | "loading";
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
  margin-top: 20px;
`;

export const AddVideoForm: FC<Props> = ({ searchResult }) => {
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

  const onSubmit = (values: addVideoFormValues) => {
    console.log(values);
  };

  return (
    <Paper>
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
                        />
                        <Button type="button" onClick={() => remove(index)}>
                          Удалить
                        </Button>
                      </FireldsRow>
                    ))}
                  <Button
                    type="button"
                    className="secondary"
                    onClick={() => push({ id: "", title: "" })}
                  >
                    Добавить еще
                  </Button>
                </div>
              )}
            </FieldArray>
            <Button type="submit">Отправить</Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
