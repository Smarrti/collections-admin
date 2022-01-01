import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";

export const checkUser = async (userInfo: User, fireApp: FirebaseApp) => {
  const db = getFirestore(fireApp);

  const docRef = doc(db, "users", userInfo.uid);
  const userDoc = await (await getDoc(docRef)).data();

  if (userDoc) {
    return userDoc;
  } else {
    const newUser = {
      uid: userInfo.uid,
      name: userInfo.displayName,
      mail: userInfo.email,
      role: "user",
    };
    await setDoc(doc(db, "users", userInfo.uid), newUser);

    return newUser;
  }
};
