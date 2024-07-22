import { useContext, useEffect, useState } from "react"
import { TextArea } from "./TextArea"
import { crudContext } from '../context/CrudContext'
import { authContext } from '../context/AuthContext'
import { noteContext } from "../context/NoteContext";

export function Note({state}) {
    console.log("\ncarga Note");

    const [allContent, setAllContent] = useState();

    const auth = useContext(authContext);
    const crud = useContext(crudContext);
    const { isNewNote, setIsNewNote} = useContext(noteContext);
    const username = auth.user.displayName;


    useEffect(() => {
        setIsNewNote(state.isNewNote)
    },[state])
    
    
    useEffect(() => {
        if(allContent) {
            console.log(allContent);
            if(isNewNote) {
                const firstElement = allContent.substring(1).split(">")[0]
                const title = allContent.split("<" + firstElement + ">")[1].split("</"+ firstElement + ">")[0];
                console.log("La nota es nueva y cambia entonces deja de serlo y se guarda " , title);
                const date = new Date().toDateString()
                console.log(date);
                //Aqui se debe de guardar
                crud.createUserNote(username, title, allContent, date);


                setIsNewNote(false)
            } else {
                console.log("La nota ya ha sido guardada, se actualiza...");
            }
        }
    },[allContent])

    let handleContent = async (content) => {
        if(content) {
            setAllContent(content)
        }
    }
    
    return (
    <>
        {
            <div className="np-note">
                <TextArea handleContent={handleContent} />
            </div>}
    </>
    )
}