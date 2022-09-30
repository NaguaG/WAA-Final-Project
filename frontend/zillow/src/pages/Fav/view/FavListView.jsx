import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';

export default function FavListView(props) {

  console.log('=============props=======================');
  console.log(props);
  console.log('=============props=======================');

  const handleClose = () => {
    props.setOpen(!props.open);
  }

  return (
    <Dialog open={props.open} onClose={handleClose} fullWidth>
      <DialogTitle>FavList Details</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          Fav List Name
        </DialogContentText> */}
        <TableContainer component={Paper} wrap="nowrap" alignItems="center" justify="space-between">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell size="small">SN</TableCell>
                <TableCell>Item List</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.item && props.item.map((val, idx) => {
                return (
                  <TableRow>
                    <TableCell>
                      {idx+1}
                    </TableCell>
                    <TableCell>{val.property.title}</TableCell>
                    <TableCell align="right">
                      <Button size="small" variant="contained" onClick={() => window.open("/property-details/"+val.id, "_blank")} endIcon={<LaunchIcon />}>View</Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
