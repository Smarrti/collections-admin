import { Formik } from "formik";
import { FC } from "react";
import { FormFieldsContent } from "../../../ui/forms/searchSongForm";

type Props = {};

export type searchSongFormType = {
  collectionId: string;
  songId: string;
};

export const SearchSongForm: FC<Props> = ({}) => {
  const initialValues: searchSongFormType = {
    collectionId: "",
    songId: "",
  };

  const onSubmit = (values: searchSongFormType) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      component={(formikBag) => <FormFieldsContent formikBag={formikBag} />}
    />
  );
};
