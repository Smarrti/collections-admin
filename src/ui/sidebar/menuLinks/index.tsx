import { ListItemText, MenuItem, MenuList } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

const Root = styled("div")`
  margin-top: 30px;
`;

export const MenuLinks: FC = () => {
  return (
    <Root>
      <MenuList>
        <MenuItem>
          <ListItemText inset>Войти</ListItemText>
        </MenuItem>
      </MenuList>
    </Root>
  );
};
