import '../css/styles.scss'

function PreviewNote({stickyColor= '#FEFEFE', title="undefined", content="undefined", date="--"}) {
    
    return (
        <>
        <div className="np-sticky-note" style={{backgroundColor: stickyColor}} >
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{date}</p>
            
        </div>
        </>
    )
}

export default PreviewNote