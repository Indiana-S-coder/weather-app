import { createContext, useContext } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCryXeFv_czbM1Az61IxCvWImbzrBjkPIY",
    authDomain: "weather-app-737fc.firebaseapp.com",
    projectId: "weather-app-737fc",
    storageBucket: "weather-app-737fc.appspot.com",
    messagingSenderId: "336551197146",
    appId: "1:336551197146:web:6f75fb24d33caf899d28e3",
    databaseURL: "https://weather-app-737fc-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider value={
       { signup, putData 
    }}>
        {props.childern}
    </FirebaseContext.Provider>
  )
};

