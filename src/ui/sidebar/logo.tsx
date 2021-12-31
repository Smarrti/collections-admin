import styled from "styled-components";

const Root = styled("div")`
  display: flex;
  padding-top: 50px;
  padding-left: 50px;
`;

const Image = styled("img")`
  width: 100px;
  height: 100px;
`;

export const Logo = () => {
  return (
    <Root>
      <Image src="/src/assets/logo.png" />
    </Root>
  );
};
