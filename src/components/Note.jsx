import { useContext, useEffect, useState } from "react"
import { TextArea } from "./TextArea"
import { crudContext } from '../context/CrudContext'
import { authContext } from '../context/AuthContext'
import { noteContext } from "../context/NoteContext";

export function Note({state}) {
    console.log("\nCarga Note ", state.note);

    const [allContent, setAllContent] = useState();
    const [tempTitle, setTempTitle] = useState(state.note);
    console.log(state.folder);
    useEffect(() => {
        if (state.note !== undefined) {
            setTempTitle(state.note.title)
        }
    },[])

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
                // const content = allContent.substring(1).split(">")[0]
                const contentArr = allContent.split(/<\/?[^>]+>/).filter(Boolean);
                // const title = allContent.split("<" + firstElement + ">")[1].split("</"+ firstElement + ">")[0];
                const title = contentArr[0]
                console.log("La nota es nueva y cambia entonces deja de serlo y se guarda " , title);
                const date = new Date().toDateString()
                console.log(title);
                //Aqui se debe de guardar
                crud.createUserNote(username, title, allContent, date);
                setIsNewNote(false)
            } else {
                console.log("La nota ya ha sido guardada, se actualiza...");
                const folder = state.folder;
                const contentArr = allContent.split(/<\/?[^>]+>/).filter(Boolean);
                setTempTitle(contentArr[0])
                const title = contentArr[0]
                const date = new Date().toDateString()
                console.log("El titulo nuevo es ", title);
                crud.updateUserNote(username, folder ,tempTitle, title, allContent, date)
                console.log("El titulo era ", tempTitle);

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
                <TextArea handleContent={handleContent} note={state.note} />
            </div>}
    </>
    )
}