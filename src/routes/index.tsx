import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../modules/signin";

export const RoutesScreen: FC = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="/ss" element={<SignUn />} /> */}
    </Routes>
  );
};
