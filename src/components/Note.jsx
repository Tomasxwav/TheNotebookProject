import { useContext, useEffect, useState } from "react"
import { TextArea } from "./TextArea"
import { crudContext } from '../context/CrudContext'
import { authContext } from '../context/AuthContext'
import { noteContext } from "../context/NoteContext";

export function Note({state}) {
    console.log("\nCarga Note ", state.note);

    const [allContent, setAllContent] = useState();
    const [tempTitle, setTempTitle] = useState(state.note);
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
                console.log("La nota es nueva y cambia, entonces deja de serlo y se guarda ");
                const contentArr = allContent.split(/<\/?[^>]+>/).filter(Boolean);
                const title = contentArr[0]
                const date = new Date().toDateString()
                crud.createUserNote(username, title, allContent, date);
                setIsNewNote(false)
            } else {
                console.log("La nota ya ha sido guardada, se actualiza...");
                const folder = state.folder;
                const contentArr = allContent.split(/<\/?[^>]+>/).filter(Boolean);
                // console.log(contentArr.map(dato => {dato.replace(/&nbsp;/g, "")}));
                setTempTitle(contentArr[0])
                const title = contentArr[0]
                const date = new Date().toDateString()
                const oldPath = `folders/${folder}/notes/${tempTitle}`
                const newPath = `folders/${folder}/notes/${title}`
                crud.updateUserNote(username, oldPath ,newPath,title, allContent, date)
                console.log("El titulo era ", tempTitle);
                console.log("El titulo nuevo es ", title);
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