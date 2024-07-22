import { Link } from "../Link"

function PreviewNote({stickyColor= '#FEFEFE', title="undefined", content="undefined", date="--", note, folder }) {
     
    const previewContent = content.replace(/&nbsp;/g, " ").split(/<\/?[^>]+>/).filter(Boolean)

    return (
        <>
        <Link to='/draw' state={{ isNewNote: false, note: note, folder: folder }} className="np-sticky-note" style={{backgroundColor: stickyColor}} >
            <h1>{title.length>25 ? title.slice(0,25).concat("..."): title}</h1>
            {previewContent.map((parraph, index) => {return <p key={index}>{index===1 && (parraph.length>30?parraph.slice(0,50).concat("..."):parraph)}</p>})}
            <p>{date}</p>
        </Link>
        </>
    )
}

export default PreviewNote