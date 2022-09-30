import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function CreateFav(props) {
  const favListData = useSelector((state) => state.favLists );
  
  const handleClose = () =>{
    props.setOpen(!props.open); 
  }
  
  const handleConfirmSubmit = (item) =>{
    if(favListData.isFirst){
      console.log('====================================');
      console.log('During Adding');
      console.log('====================================');
    } else {
      // edit
      props.onCreateConfirmClicked(item)
    }
  }


  return (
    <Dialog open={props.open} onClose={handleClose} fullWidth>
        <DialogTitle>{favListData.isFirst ? 'Add New' : 'Edit'} Fav</DialogTitle>
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
            value={favListData.isFirst ? '' : props.item.name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleConfirmSubmit(props.item)}>Submit</Button>
        </DialogActions>
      </Dialog>
  )
}
