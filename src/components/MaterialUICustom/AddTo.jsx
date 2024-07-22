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

export default function AddTo({allFolders, currentFolder, handleChange, handleDialogClose, openDialog}) {
    console.log(currentFolder);
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
                        onChange={handleChange}
                    >
                    {allFolders.map((folder, index) => {
                        return (
                            <FormControlLabel key={index} value={folder} control={currentFolder === folder ? <Radio checked={true}/>:<Radio />} label={folder} disabled={currentFolder === folder && true}  />
                        )
                    })}
                </RadioGroup>
            </FormControl>
        </DialogContent>
    </Dialog>
  );
}