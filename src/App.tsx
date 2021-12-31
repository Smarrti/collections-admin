import { createContext } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { RootGrid } from "./ui/rootGrid";

const Root = styled("div")`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const app = initializeApp(firebaseConfig);
  const FirebaseContext = createContext(app);

  return (
    <FirebaseContext.Provider value={app}>
      <Root>
        <RootGrid />
      </Root>
    </FirebaseContext.Provider>
  );
}

export default App;
