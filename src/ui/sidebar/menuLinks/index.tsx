import { ListItemText, MenuItem, MenuList } from "@mui/material";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { anonymRoutes, routes } from "../../../routes";
import { UserContext } from "../../../utils/context/userContext";

const Root = styled(MenuList)`
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

export const MenuLinks: FC = () => {
  const user = useContext(UserContext);

  const links = user !== null ? routes : anonymRoutes;

  debugger;

  return (
    <Root>
      {links.map((item) => (
        <StyledLink to={item.path} key={item.id}>
          <MenuItem>
            <ListItemText inset>{item.title}</ListItemText>
          </MenuItem>
        </StyledLink>
      ))}
    </Root>
  );
};
