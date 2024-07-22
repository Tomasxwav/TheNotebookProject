import app from "../database/connection";
import { getDatabase, set, ref, get, child, push, remove } from "firebase/database";
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
      date : date,
      color: '#FDFECE'
      });
    }
  
    
  //Edit User Note
  // const updateUserNote = async(name, folder, oldTitle, title , content, date) => {
  const updateUserNote = async(name, oldPath, newPath, title , content, date) => {
    const respose = await get(ref(db, `users/${name}/${oldPath}`));
    if (respose.exists()) {
      const data = respose.val();
      console.log(data);
      if(newPath === oldPath) {
        await set(child(ref(db), `users/${name}/${newPath}/`), {
          // userId: userId,
          title: title,
          content: content,
          date : date,
          color: '#A0F6F0'
          });
      } else {
        console.log("El titulo es diferente, debe de cambiar");
        // const path=`folders/${folder}/notes`
        await set(child(ref(db), `users/${name}/${newPath}/`), {
          // userId: userId,
          title: title,
          content: content,
          date : date,
          color: '#F6AEA0'
          })
          .then(() => {
            const oldTitle = oldPath.split("/").slice(-1)[0];
            const path = oldPath.split(oldTitle)[0];
            console.log(path, oldTitle);
            deleteUserNote(name,oldTitle,path)
          })
        }
      }
    }

    //Remove user note
    const deleteUserNote = async (name, key, path) => {
      await remove(child(ref(db),  `users/${name}/${path}/${key}`))
    }

    return <crudContext.Provider value={{writeUserData, createUserFolder, createUserNote, readUserData, readUserFolder, updateUserNote, deleteUserNote}}>{children}</crudContext.Provider>
}