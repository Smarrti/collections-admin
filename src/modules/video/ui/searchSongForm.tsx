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
    React.SetStateAction<SongContentType | undefined | "loading" | "not found">
  >;
  setSearchResultId: React.Dispatch<React.SetStateAction<string | null>>;
};

export type searchSongFormType = {
  collectionId: string;
  songId: string;
};

export const SearchSongForm: FC<Props> = ({
  setSearchResult,
  setSearchResultId,
}) => {
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
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        const result = {
          ...data,
          id: doc.id,
          title: data.title,
          bookId: data.bookId,
          songNumber: data.songNumber,
          notesSources: data.notesSources,
          notes: data.notes,
          videosId: data.videosId,
        };
        // @ts-ignore

        queryResult.push(result);
      });
      if (queryResult.length) {
        setSearchResult(queryResult[0]);
        // @ts-ignore
        setSearchResultId(queryResult[0].id);
      } else {
        setSearchResultId(null);
        setSearchResult("not found");
      }
    } catch {
      setSearchResultId(null);
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
