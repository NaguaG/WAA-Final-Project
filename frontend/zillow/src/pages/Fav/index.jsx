import { Button, ButtonGroup, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteAlert from '../../components/DeleteAlert/DeleteAlert';

export default function FavList() {
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const [data, setData] = useState(rows);
  const [deletModelShow, setDeletModelShow] = useState(false);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }


  function onBtnClicked(type, id){
    if(type == 'view'){
      alert('view'+id)

    } else if( type == 'edit'){
      alert('edit'+id)

    } else {
      // delete
      setId(id);
      setDeletModelShow(!deletModelShow)
    }
  }

  function onConfirmClicked(item){
    setDeletModelShow(!deletModelShow)
    console.log('====================================');
    console.log(item);
    console.log('====================================');
  }

  return (
    <>
      <Container fixed>
        <Grid container spacing={12} direction="row"
          alignItems="center"
          justifyContent="space-between">
          <Grid item>
            <h1> FavList </h1>
          </Grid>
          <Grid item>
            <Button variant="contained" color='success' onClick={() => navigate('/dashboard/fav/create')}>+ New</Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="contained">
                      <Button size="small" color="secondary" onClick={()=> {onBtnClicked('view',1)}}>View</Button>
                      <Button size="small" color="success" onClick={()=> {onBtnClicked('edit',1)}}>Edit</Button>
                      <Button size="small" color="error" onClick={()=> {onBtnClicked('delete',1)}}>Delete</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        { deletModelShow && <DeleteAlert item={id}  open={deletModelShow} setOpen={setDeletModelShow} onConfirmClicked={() => onConfirmClicked(id)}  />}
      </Container>
    </>
  )
}
