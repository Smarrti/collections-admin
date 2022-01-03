import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Formik } from "formik";
import React, { FC, useContext } from "react";
import { FormFieldsContent } from "../../../ui/forms/searchSongForm";
import { FirebaseContext } from "../../../utils/context/firebaseContext";
import { SongContentType } from "../../../utils/types/songContent.type";

type Props = {
  setSearchResult: React.Dispatch<
    React.SetStateAction<SongContentType | undefined | "loading">
  >;
};

export type searchSongFormType = {
  collectionId: string;
  songId: string;
};

export const SearchSongForm: FC<Props> = ({ setSearchResult }) => {
  const fireApp = useContext(FirebaseContext);
  const initialValues: searchSongFormType = {
    collectionId: "",
    songId: "",
  };

  const onSubmit = async (values: searchSongFormType) => {
    if (!fireApp) {
      return;
    }
    try {
      setSearchResult("loading");
      const db = getFirestore();
      const q = query(
        collection(db, "songsOfflineContent"),
        where("bookId", "==", +values.collectionId),
        where("songNumber", "==", +values.songId)
      );

      const querySnapshot = await getDocs(q);
      const queryResult: SongContentType[] = [];
      debugger;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const result = {
          ...data,
          title: data.title,
          bookId: data.bookId,
          songId: data.songId,
          notesSources: data.notesSources,
          notes: data.notes,
          videosId: data.videosId,
        };
        queryResult.push(result);
      });
      setSearchResult(queryResult[0]);
    } catch {
      setSearchResult(undefined);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      component={(formikBag) => <FormFieldsContent formikBag={formikBag} />}
    />
  );
};
