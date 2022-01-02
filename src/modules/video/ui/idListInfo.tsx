import { Typography } from "@mui/material";
import React, { FC } from "react";
import styled from "styled-components";

type Props = {};

const Root = styled("div")`
  margin-top: 15px;
`;

export const IdListInfo: FC<Props> = ({}) => {
  return (
    <Root>
      <Typography>1 – Песнь возрождения</Typography>
      <Typography>2 – Прекрасный удел</Typography>
      <Typography>3 – Тебе пою о мой Спаситель</Typography>
      <Typography>4 – Держись Христа</Typography>
      <Typography>5 – Песни Юности. Том 1</Typography>
      <Typography>6 – Юность Иисусу</Typography>
      <Typography>7 – Тукэ гилябарав Дэйвла</Typography>
      <Typography>8 – Утро жизни</Typography>
      <Typography>9 – Пiснi спасенних</Typography>
    </Root>
  );
};
