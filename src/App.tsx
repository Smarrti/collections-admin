import { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { RootGrid } from "./ui/rootGrid";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from "./utils/context/firebaseContext";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { UserContext } from "./utils/context/userContext";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <FirebaseContext.Provider value={app}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <RootGrid />
        </BrowserRouter>
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
}

export default App;
