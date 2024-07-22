import app from '../database/connection'
import React, { useState, useEffect, createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged ,updateProfile } from "firebase/auth";
import { Headers } from '../components/Headers';

const auth = getAuth()
export const authContext = createContext();

export function AuthProvider({children}) {

    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const logged = onAuthStateChanged(auth, (currentUser) => {
          if (!currentUser) {
            console.log("no hay usuario suscrito");
            setUser("");
          } else {
            console.log("Ya hay usuario suscrito " +  currentUser.displayName);
            setUser(currentUser);
          }
        });
        return () => logged();
      }, []);


    const register = async (email, userName, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, { displayName: userName })
        
        console.log(response)
    };
    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response)
        return (response)
    };
    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    };


    return (<authContext.Provider value={{
        register, login ,logout, user
    }}>{user !== null ? children : <Headers/>}</authContext.Provider>)
}