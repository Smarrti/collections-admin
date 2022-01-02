import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../modules/main";
import { SignIn } from "../modules/signin";
import { SignOut } from "../modules/signOut";
import { Video } from "../modules/video";
import { UserContext } from "../utils/context/userContext";
import { UserInfo } from "../utils/types/userInfo.type";

export const anonymRoutes = [
  {
    id: 1,
    title: "Войти",
    path: "/",
    element: <SignIn />,
  },
  {
    id: 2,
    title: "Видео",
    path: "/videos",
    element: <Video />,
  },
];

export const notGrantedRoutes = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    element: <Main />,
  },
  {
    id: 2,
    title: "Выйти",
    path: "/signOut",
    element: <SignOut />,
  },
];

export const grantedRoutes = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    element: <Main />,
  },
  {
    id: 2,
    title: "Видео",
    path: "/videos",
    element: <Video />,
  },
  {
    id: 3,
    title: "Ноты",
    path: "/notes",
    element: <div>Ноты</div>,
  },
  {
    id: 4,
    title: "Выйти",
    path: "/signOut",
    element: <SignOut />,
  },
];

export const determineRoutes = (user: UserInfo | undefined) => {
  if (user && user.role === "user") {
    return notGrantedRoutes;
  }

  if (user && user.role === "editor") {
    return grantedRoutes;
  }

  return anonymRoutes;
};

export const RoutesScreen: FC = () => {
  const user = useContext(UserContext);

  const links = determineRoutes(user);

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
