import {
  Box,
  Container,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ImageCarousal from "../../components/ImageCarousal";

const HomePage = (props) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleChange = (e) => {};

  return (
    <Container
      sx={{ padding: "0px !important", borderRadius: "" }}
      component="main"
      maxWidth="xl">
      <ImageCarousal />
      <Container>
        <Grid container spacing={0} sx={{ mt: 3 }}>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                id="location"
                value={location}
                label="Location"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
              <InputLabel id="property-label">Property Type</InputLabel>
              <Select
                labelId="property-label"
                id="property"
                value={propertyType}
                label="Property Type"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
              <Button variant="contained" endIcon={<SearchIcon />}>
                Search
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default HomePage;
