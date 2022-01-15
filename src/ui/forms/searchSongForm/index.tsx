import { Button, TextField } from "@mui/material";
import { Form, FormikProps } from "formik";
import { FC, useState } from "react";
import styled from "styled-components";
import { IdListInfo } from "../../../modules/video/ui/idListInfo";
import { searchSongFormType } from "../../searchSongForm";

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
  const [idVisible, setIdVisible] = useState(false);
  const { values, setFieldValue } = formikBag;

  const toggleList = () => setIdVisible((value) => !value);

  return (
    <div>
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
        <Button onClick={toggleList}>Список ID</Button>
      </StyledForm>
      {idVisible && <IdListInfo />}
    </div>
  );
};
