import { createContext } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { RootGrid } from "./ui/rootGrid";
import { BrowserRouter } from "react-router-dom";

function App() {
  const app = initializeApp(firebaseConfig);
  const FirebaseContext = createContext(app);

  return (
    <FirebaseContext.Provider value={app}>
      <BrowserRouter>
        <RootGrid />
      </BrowserRouter>
    </FirebaseContext.Provider>
  );
}

export default App;
