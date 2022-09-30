import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

export default function CreateFav(props) {
  
  const handleClose = () =>{
    props.setOpen(!props.open); 
  }
  
  const handleConfirmSubmit = (id) =>{
    props.onConfirmClicked(id)
  }

  return (
    <Dialog open={props.open} onClose={handleClose} fullWidth>
        <DialogTitle>Add New Fav</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fav List Name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
  )
}
