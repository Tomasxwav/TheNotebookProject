import app from "../database/connection";
import { getDatabase, set, ref, get, child } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";

export const crudContext = createContext()
const dbRef = ref(getDatabase());
const db = getDatabase()


export const useDatabase = () => {
    const context = useContext(crudContext)
    if (!context) {
        console.log("error creating database CRUD context");
    }
    return context;
};


export function CrudProvider ({ children }) {

  const [userData, setUserData] = useState();
  const readUserData = async (username) => {
    const response = await get(child(dbRef, `users/${username}/data/`)).then(resp => {
      setUserData(resp)
      return resp.val()
    })
  }
  
  const writeUserData = async(name, email) => {
      await set(child(ref(db), 'users/' + name + '/data/'), {
        // userId: userId,
        username: name,
        email: email,
        // profile_picture : imageUrl
      });
    }

  return <crudContext.Provider value={{writeUserData, readUserData}}>{children}</crudContext.Provider>
}