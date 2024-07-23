import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

export default function AddTo({allFolders, currentFolder, handleChange, handleDialogClose, openDialog, isAddingFolder, handleAddFolder}) {
    // console.log(currentFolder);
    
    // const [isAddingFolder, setIsAddingFolder] = React.useState(false)
    
    const handleEnd=(e)=>{
        if(e.key==='Enter') {
            handleChange(e.target.value)
        }
    }

  return (
    <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {"Select Folder"}
        </DialogTitle>
        <DialogContent>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Folders:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="unexist"
                        name="radio-buttons-group"
                        onChange={
                            (event) => {
                                handleChange(event.nativeEvent.srcElement.value)
                            }
                        }
                    >
                    {allFolders.map((folder, index) => {
                        return (
                            <FormControlLabel key={index} value={folder} control={currentFolder === folder ? <Radio checked={true}/>:<Radio  color="default"/>} label={folder} disabled={currentFolder === folder && true}  />
                        )
                    })}

                    {isAddingFolder && (
                        <div style={{display: 'flex'}}>
                        {/* <FormControlLabel value={""} control={<Radio checked={false}/>} label={""}  />  onBeforeInput={handleEnd}*/}

                        <TextField 
                        onKeyUp={handleEnd}
                        id="outlined-basic" label="New Folder" variant="outlined"  size="small"/>
                        </div>
                    )}
                    {!isAddingFolder && (<Button sx={{ mt: 1 }} onClick={handleAddFolder} variant="outlined">
                        ADD FOLDER
                    </Button>)}
                </RadioGroup>
            </FormControl>
        </DialogContent>
    </Dialog>
  );
}