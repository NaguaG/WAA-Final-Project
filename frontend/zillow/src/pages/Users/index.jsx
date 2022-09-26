import { Box, Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import {get} from "../../api";



export default function Users() {
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    get('/api/users' + (username ? `?username=${username}` : "")).then((res) => setData(res.data))
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

    </>
  )
}
