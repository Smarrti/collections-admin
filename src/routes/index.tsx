import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../modules/signin";
import { UserContext } from "../utils/context/userContext";

export const anonymRoutes = [
  {
    id: 1,
    title: "Войти",
    path: "/",
    element: <SignIn />,
  },
];

export const routes = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    element: <div>Главная</div>,
  },
  {
    id: 2,
    title: "Видео",
    path: "/videos",
    element: <div>Видео</div>,
  },
  {
    id: 3,
    title: "Ноты",
    path: "/notes",
    element: <div>Ноты</div>,
  },
];

export const RoutesScreen: FC = () => {
  const user = useContext(UserContext);

  const links = user !== null ? routes : anonymRoutes;

  return (
    <Routes>
      <>
        {links.map((item) => (
          <Route path={item.path} element={item.element} key={item.id} />
        ))}
      </>
    </Routes>
  );
};
