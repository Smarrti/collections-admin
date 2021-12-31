import { Grid } from "@mui/material";
import styled from "styled-components";
import { Sidebar } from "./ui/sidebar";

const Root = styled("div")`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <Root>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} />
      </Grid>
    </Root>
  );
}

export default App;
