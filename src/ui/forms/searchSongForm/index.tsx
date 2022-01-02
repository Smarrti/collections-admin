import { Button, TextField } from "@mui/material";
import { Form, FormikProps } from "formik";
import { FC } from "react";
import styled from "styled-components";
import { searchSongFormType } from "../../../modules/video/ui/searchSongForm";

type Props = {
  formikBag: FormikProps<searchSongFormType>;
};

const StyledTextField = styled(TextField)`
  margin-right: 20px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormFieldsContent: FC<Props> = ({ formikBag }) => {
  const { values, setFieldValue } = formikBag;

  return (
    <StyledForm>
      <StyledTextField
        id="collectionId"
        label="ID сборника"
        variant="outlined"
        type="number"
        value={values.collectionId}
        onChange={(e) => setFieldValue("collectionId", e.target.value)}
      />
      <StyledTextField
        id="songId"
        label="Номер песни"
        variant="outlined"
        type="number"
        value={values.songId}
        onChange={(e) => setFieldValue("songId", e.target.value)}
      />
      <Button type="submit">Поиск</Button>
    </StyledForm>
  );
};
