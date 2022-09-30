import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProperties } from "../../store/slices/property/propertySlice";

export default function Properties() {
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(fetchProperties()).then((res) => {
      console.log('res',res)
      setData(res.payload);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

 const [valuePrice, setValueByPrice] = useState(0);
 const [valueNumberOfRooms, setvalueNumberOfRoomsalueNumberOfRooms] = useState("");
  const [valuePropertyType, setValuePropertyType] = useState("");
   const [valueHomeType, setValueHomeType] = useState("");
  const [valueLocation, setValueLocation] = useState("");
  
  const [values, setValues] = useState({
    valuePrice : '',
    valueNumberOfRooms : '',
  });
  
  const [data, setData] = useState([]);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const filterVal=()=>{
    //TODO need to filter and show data 
    dispatch(fetchProperties()).then((res) => {
      setData(res.payload);
    });
  }

  const handleChange = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.value
    })
  };

 
  return (
    <>
      <Container fixed>
        <Grid
          container
          spacing={12}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <h1> Properties </h1>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/dashboard/properties/create")}
            >
              + New
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
              label="By Price"
              value={values.valuePrice}
              onChange={handleChange}
              name='valuePrice'
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
              label="Property Type"
              value={values.valuePropertyType}
              onChange={handleChange}
              name='valuePropertyType'
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
              label="Number of Rooms"
              value={values.valueNumberOfRooms}
              onChange={handleChange}
              name='valueNumberOfRooms'
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
              label="Home Type"
              value={values.valueHomeType}
              onChange={handleChange}
              name='valueHomeType'
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-multiline-flexible"
              label="Location"
              value={values.valueLocation}
              onChange={handleChange}
              name='valueLocation'
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => filterVal}//alert("Clicked")
            >
              Filter
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Is for sale</TableCell>
                <TableCell align="right">Is for Rent</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Property Type</TableCell>
                <TableCell align="right">Number Of Rooms</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.location ? row.location.name : ""}</TableCell>
                  <TableCell align="right">{row.isForSell ? "Yes" : "No"}</TableCell>
                  <TableCell align="right">{row.isForRent ? "Yes" : "No"}</TableCell>
                  <TableCell align='right'>{row.price}</TableCell>
                  <TableCell align='right'>{row.propertyType}</TableCell> 
                  <TableCell align='right'>{row.numberOfRooms}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
