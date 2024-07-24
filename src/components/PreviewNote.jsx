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


function PreviewNote({ note, folder, areChanges, setAreChanges, allFolders}) {
     
    const crud = useContext(crudContext)
    const auth = useContext(authContext)
    const [openAlert, setOpenAlert] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [isAddingFolder, setIsAddingFolder] = useState(false)
    
    const handleClickOpen = () => {
        setOpenAlert(true);
    };
      const handleClose = () => {
        setOpenAlert(false);
    };
    const handleConfirmAlert = async () => {

        await crud.deleteUserNote(auth.user.displayName,`folders/${folder}/notes/${note.title}`)
        setAreChanges(!areChanges)
        setOpenAlert(false);
        // alert('Deleted? '+ auth.user.displayName + " " + `folders/${folder}/notes/${note.title}`);
    };
    const handleDialogOpen = () => {
        setOpenDialog(true);
    };
    const handleChange = async (newFolder) => {
        setOpenDialog(false)
        const oldPath = `folders/${folder}/notes/${note.title.substring(0,30)}`
        const newPath = `folders/${newFolder}/notes/${note.title.substring(0,30)}`

        console.log("La carpeta deberia moverse de ", oldPath, " a ", newPath);
        await crud.updateUserNote(auth.user.displayName, oldPath ,newPath,note.title , note.content, note.date).then(()=>{setAreChanges(!areChanges)})
    }
    const handleDialogClose = () => {
        setOpenDialog(false);
        setIsAddingFolder(false)
    };
    const handleAddFolder=() =>{
        setIsAddingFolder(true)
    }

    const previewContent = note.content.replace(/&nbsp;/g, "").split(/<\/?[^>]+>/).filter(Boolean)
    return (
        <div className="np-sticky-note" style={{backgroundColor: note.color}}>
            <div className="np-sn-topbar">
            <div className="np-sn-fold"/>
                <Stack className="np-sn-icon" direction="row" spacing={0}>
                    <IconButton onClick={handleDialogOpen} aria-label="addtofolder">
                        <Icon>add_circle</Icon>
                    </IconButton>
                    <IconButton onClick={handleClickOpen} aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                </Stack>
            </div>
            <AddTo allFolders={allFolders} currentFolder={folder} handleChange={handleChange} handleDialogClose={handleDialogClose} openDialog={openDialog} isAddingFolder={isAddingFolder} handleAddFolder={handleAddFolder}/>

            <DeleteDialog folders={folder} handleClickOpen={handleClickOpen} handleClose={handleClose} handleConfirmAlert={handleConfirmAlert} openAlert={openAlert}/> 


            <Link className='np-sticky-note-content' to='/draw' state={{ isNewNote: false, note: note, folder: folder}}   >
                
                <h1>{note.title.length>25 ? note.title.slice(0,25) + "...": note.title}</h1>
                {previewContent.map((parraph, index) => {return <p key={index}>{index===1 && (parraph.length>30?parraph.slice(0,50) + "...":parraph)}</p>})}
                <p>{note.date}</p>
            </Link>
        </div>
    )
}

export default PreviewNote