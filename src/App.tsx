import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { RootGrid } from "./ui/rootGrid";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from "./utils/context/firebaseContext";
import { getAuth } from "firebase/auth";
import { UserContext } from "./utils/context/userContext";
import { checkUser } from "./modules/signin/checkUser";
import { UserInfo } from "./utils/types/userInfo.type";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  useEffect(() => {
    const asyncEffect = async () => {
      if (!auth.currentUser) {
        return
      }

      const userInfo = await checkUser(auth.currentUser, app)
      setUserInfo(userInfo)
    }

    asyncEffect()
  }, [])


  return (
    <FirebaseContext.Provider value={app}>
      <UserContext.Provider value={{userInfo, setUserInfo}}>
        <BrowserRouter>
          <RootGrid />
        </BrowserRouter>
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
}

export default App;
