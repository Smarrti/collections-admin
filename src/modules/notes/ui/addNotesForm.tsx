import {
  Button,
  CircularProgress,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import styled from "styled-components";
import { Paper } from "../../../ui/paper";
import { SongContentType } from "../../../utils/types/songContent.type";

type Props = {
  searchResult: SongContentType | "loading";
  searchResultId: string | null;
};

const FieldsRow = styled("div")`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const StyledTextField = styled(TextField)`
  margin-right: 20px;
`;

type addNotesFormValues = {
  notes: {
    title: string;
    url: string;
  }[];
  notesSources: {
    title: string;
    url: string;
  };
};

const initialValues: addNotesFormValues = {
  notes: [
    {
      title: "",
      url: "",
    },
  ],
  notesSources: {
    title: "Наше музыкальное наследие",
    url: "",
  },
};

export const AddNotesForm: FC<Props> = ({ searchResult, searchResultId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  if (searchResult === "loading") {
    return (
      <Paper>
        <Skeleton variant="text" height={50} />
        <Skeleton variant="text" height={50} />
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  const onSubmit = async (
    values: addNotesFormValues,
    formikHelpers: FormikHelpers<addNotesFormValues>
  ) => {
    if (!searchResultId) {
      return;
    }
    try {
      setIsSubmitting(true);

      const db = getFirestore();

      const docReference = doc(db, "songsOfflineContent", searchResultId);

      await updateDoc(docReference, {
        ...searchResult,
        notes: [...searchResult.notes, ...values.notes],
        notesSources: [values.notesSources],
      });
    } catch (e) {
      console.log(e);
    }

    formikHelpers.resetForm();
    setIsSubmitting(false);
  };

  return (
    <Paper>
      {isSubmitting && <CircularProgress />}

      <Typography variant="h5">Результат поиска</Typography>
      <Typography style={{ margin: "10px 0" }}>{searchResult.title}</Typography>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <Typography>Источник</Typography>
            <FieldsRow>
              <StyledTextField
                id={`notesSources`}
                label="Заголовок источника"
                variant="outlined"
                type="text"
                value={values.notesSources.title}
                onChange={(e) =>
                  setFieldValue(`notesSources.title`, e.target.value)
                }
                disabled={isSubmitting}
              />
              <StyledTextField
                id={`notesSources`}
                label="Ссылка источника"
                variant="outlined"
                type="text"
                value={values.notesSources.url}
                onChange={(e) =>
                  setFieldValue(`notesSources.url`, e.target.value)
                }
                disabled={isSubmitting}
                style={{ flex: 1 }}
              />
            </FieldsRow>
            <Typography>Ноты</Typography>

            <FieldArray name="notes">
              {({ remove, push }) => (
                <div>
                  {values.notes.length > 0 &&
                    values.notes.map((note, index) => (
                      <FieldsRow key={index}>
                        <StyledTextField
                          id={`note-${index}`}
                          label="Заголовок"
                          variant="outlined"
                          type="text"
                          value={note.title}
                          onChange={(e) =>
                            setFieldValue(
                              `notes[${index}].title`,
                              e.target.value
                            )
                          }
                          disabled={isSubmitting}
                        />
                        <StyledTextField
                          id={`note-${index}`}
                          label="Ссылка"
                          variant="outlined"
                          type="text"
                          value={note.url}
                          onChange={(e) =>
                            setFieldValue(`notes[${index}].url`, e.target.value)
                          }
                          disabled={isSubmitting}
                          style={{ flex: 1 }}
                        />
                        <Button
                          type="button"
                          onClick={() => remove(index)}
                          disabled={isSubmitting}
                        >
                          Удалить
                        </Button>
                      </FieldsRow>
                    ))}
                  <Button
                    type="button"
                    className="secondary"
                    onClick={() => push({ title: "", url: "" })}
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
