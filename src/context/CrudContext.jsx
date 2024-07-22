import app from "../database/connection";
import { getDatabase, set, ref, get, child, push } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";

export const crudContext = createContext()
const dbRef = ref(getDatabase());
const db = getDatabase()


export function CrudProvider ({ children }) {

  //Return User Data
  const readUserData = async (username) => {
    try {
      const response = await get(child(ref(db), `users/${username}/data/`))
      if(response.exists()){
        return response.val();
      } else {
        alert('No data available')
        return null;
      }
    } catch (err) {
      console.error("Error getting user data:", error);
      throw error;
    }
  }
  
  //Return User Folders object
  const readUserFolder = async (username) => {
    try {
      const response = await get(child(ref(db), `users/${username}/folders/`))
      if(response.exists()){
        return response.val();
      } else {
        alert('No data available')
        return null;
      }
    } catch (err) {
      console.error("Error getting user data:", error);
      throw error;
    }
  }
  
  //Create User Data at Database
  const writeUserData = async(name, email) => {
      await set(child(ref(db), 'users/' + name + '/data/'), {
        // userId: userId,
        username: name,
        email: email,
        // profile_picture : imageUrl
      });
    }



  //Create User folder at Database
  const createUserFolder = async(name, foldername) => {
      await set(child(ref(db), 'users/' + name + '/folders/' + foldername));
    }
    
    //Create User folder at Database
  const createUserNote = async(name, title, content, date) => {
    await set(child(ref(db), 'users/' + name + '/folders/unasigned/notes/' + title.substring(0,30)), {
      // userId: userId,
      title: title,
      content: content,
      date : date
    });
    }



    return <crudContext.Provider value={{writeUserData, createUserFolder, createUserNote, readUserData, readUserFolder}}>{children}</crudContext.Provider>
}