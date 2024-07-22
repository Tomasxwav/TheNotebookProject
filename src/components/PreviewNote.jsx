import { Link } from "../Link"
import DeleteDialog from "./MaterialUICustom/DeleteDialog"
import AddTo from "./MaterialUICustom/AddTo";
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { crudContext } from "../context/CrudContext";
import { authContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

function PreviewNote({stickyColor= '#FEFEFE', title="undefined", content="undefined", date="--", note, folder, areChanges, setAreChanges, allFolders}) {
     
    const crud = useContext(crudContext)
    const auth = useContext(authContext)
    const [openAlert, setOpenAlert] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    
    const handleClickOpen = () => {
        setOpenAlert(true);
    };
      const handleClose = () => {
        setOpenAlert(false);
    };
    const handleConfirmAlert = async () => {
        await crud.deleteUserNote(auth.user.displayName,note.title,`folders/${folder}/notes`)
        setAreChanges(!areChanges)
        setOpenAlert(false);
        alert('Deleted');
    };
    const handleDialogOpen = () => {
        setOpenDialog(true);
    };
    const handleChange = async (e) => {
        const newFolder = e.nativeEvent.srcElement.value;
        setOpenDialog(false)
        const oldPath = `folders/${folder}/notes/${note.title}`
        const newPath = `folders/${newFolder}/notes/${note.title}`

        console.log("La carpeta deberia moverse de ", folder, " a ", newFolder);
        await crud.updateUserNote(auth.user.displayName, oldPath ,newPath,note.title , note.content, note.date)
        setAreChanges(!areChanges)
    }
    const handleDialogClose = () => {
        setOpenDialog(false);
    };
    // console.log(openAlert);


    const previewContent = content.replace(/&nbsp;/g, " ").split(/<\/?[^>]+>/).filter(Boolean)
    return (
        <div className="np-sticky-note" style={{backgroundColor: stickyColor}}>
        <Stack className="np-sn-icon" direction="row" spacing={0}>
            <IconButton onClick={handleDialogOpen} aria-label="addtofolder">
                <Icon>add_circle</Icon>
            </IconButton>
            <IconButton onClick={handleClickOpen} aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        </Stack>

        <AddTo allFolders={allFolders} currentFolder={folder} handleChange={handleChange} handleDialogClose={handleDialogClose} openDialog={openDialog}/>

        <DeleteDialog folders={folder} handleClickOpen={handleClickOpen} handleClose={handleClose} handleConfirmAlert={handleConfirmAlert} openAlert={openAlert}/> 


        <Link className='np-sticky-note-content' to='/draw' state={{ isNewNote: false, note: note, folder: folder}}   >
            
            <h1>{title.length>25 ? title.slice(0,25) + "...": title}</h1>
            {previewContent.map((parraph, index) => {return <p key={index}>{index===1 && (parraph.length>30?parraph.slice(0,50) + "...":parraph)}</p>})}
            <p>{date}</p>
        </Link>
        </div>
    )
}

export default PreviewNote