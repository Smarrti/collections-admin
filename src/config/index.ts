const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

export const firebaseConfig = {
  apiKey: `${apiKey}`,
  authDomain: "collectionsofchristians.firebaseapp.com",
  databaseURL: "https://collectionsofchristians-default-rtdb.firebaseio.com",
  projectId: "collectionsofchristians",
  storageBucket: "collectionsofchristians.appspot.com",
  messagingSenderId: "708330453378",
  appId: "1:708330453378:web:1fc0989f60da401dd1779b",
  measurementId: "G-S8ZB0TRP9T",
};
