import { Link } from "../Link"

function PreviewNote({stickyColor= '#FEFEFE', title="undefined", content="undefined", date="--"}) {
    // onClick={() => {console.log(title)}}to={'/draw'}
    return (
        <>
        <Link to='/draw' state={{ isNewNote: false }} className="np-sticky-note" style={{backgroundColor: stickyColor}} >
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{date}</p>
            
        </Link>
        {/* <div  className="np-sticky-note" style={{backgroundColor: stickyColor}} >
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{date}</p>
            
        </div> */}
        </>
    )
}

export default PreviewNote