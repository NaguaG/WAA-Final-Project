import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import Container from '@mui/material/Container';
import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import {del, get, put} from "../../api";
import DeleteAlert from "../../components/DeleteAlert/DeleteAlert";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../../store/slices/users/usersSlice";


export default function Users() {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);
  const [deletModelShow, setDeletModelShow] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchUsers()).then((res) => {
      console.log(res);
    })
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const filter = () => {
    fetchData();
  }

  function onBtnClicked(type, id){
    if(type == 'view'){
      alert('view'+id)

    } else if( type == 'edit'){
      alert('edit'+id)

    } else {
      // disable
      setDeletModelShow(!deletModelShow)
    }
  }

  function onConfirmClicked(item){
    put(`/api/users/${id}/disable`);
    setDeletModelShow(!deletModelShow)
    console.log('====================================');
    console.log(item);
    console.log('====================================');
  }

  return (
    <>
      <Container fixed>
        <h1> Users </h1>

        <Grid container spacing={1} direction="row"
          alignItems="center"
          justify="center">
          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
              label="By Username"
              value={username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => filter()}>Filter</Button>
          </Grid>
        </Grid>
        <br /><br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Full Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.fullName}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.roles[0].role_name}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="contained">
                      <Button size="small" color="secondary" onClick={()=> {onBtnClicked('view',1)}}>View</Button>
                      <Button size="small" color="success" onClick={()=> {onBtnClicked('edit',1)}}>Edit</Button>
                      <Button size="small" color="error" onClick={()=> {onBtnClicked('disable',1)}}>Disable</Button>
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
