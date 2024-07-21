import { useEffect, useState } from "react"
import { TextArea } from "./TextArea"


export function Note({ params }) {
    const [title, setTitle] = useState();
    const [allContent, setAllContent] = useState();
    const handleContent = (e) => {
        setAllContent(e)
        console.log("No llega aqui wtf");
    }


    useEffect(() => {
        // console.log(allContent);
        console.log("Se actualiza el efecto");
    } ,[allContent])


    return (
        <div className="np-note">
            <TextArea handleContent={handleContent} />
        </div>
    )
}