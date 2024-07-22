import { Link } from "../Link"
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useState } from "react";

function PreviewNote({stickyColor= '#FEFEFE', title="undefined", content="undefined", date="--", note, folder }) {
     
    const previewContent = content.replace(/&nbsp;/g, " ").split(/<\/?[^>]+>/).filter(Boolean)
    return (
        <div className="np-sticky-note" style={{backgroundColor: stickyColor}}>
        <Stack className="np-sn-icon" direction="row" spacing={0}>
                <IconButton aria-label="delete">
                {/* onClick={(e) => {e.stopPropagation();param=false}} */}
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="addtofolder">
                    <Icon>add_circle</Icon>
                </IconButton>
            </Stack>
        <Link className='np-sticky-note-content' to='/draw' state={{ isNewNote: false, note: note, folder: folder}}   >
            
            <h1>{title.length>25 ? title.slice(0,25).concat("..."): title}</h1>
            {previewContent.map((parraph, index) => {return <p key={index}>{index===1 && (parraph.length>30?parraph.slice(0,50).concat("..."):parraph)}</p>})}
            <p>{date}</p>
        </Link>
        </div>
    )
}

export default PreviewNote