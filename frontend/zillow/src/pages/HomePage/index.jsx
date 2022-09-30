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
import { useState, useEffect } from "react";
import ImageCarousal from "../../components/ImageCarousal";
import PropertyCard from "../../components/PropertyCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProperties } from "../../store/slices/properties/propertySlice";
import { selectProperties } from "../../store/slices/properties/selectors";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const properties = useSelector((state) => selectProperties(state));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "propertyType") {
      setPropertyType(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    let locationValue = location;
    let propertyValue = propertyType;
    if (location === "0") {
      locationValue = null;
    } else if (propertyType === "0") {
      propertyValue = null;
    }
    dispatch(
      loadProperties({ location: locationValue, propertyType: propertyValue })
    );
  };

  useEffect(() => {
    dispatch(loadProperties({ location, propertyType }));
  }, []);

  return (
    <Container
      sx={{ padding: "0px !important", borderRadius: "", marginBottom: "6rem" }}
      component="main"
      maxWidth="xl">
      <ImageCarousal />
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent={"center"}
          sx={{ mt: 3 }}>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                name="location"
                labelId="location-label"
                id="location"
                value={location}
                label="Location"
                onChange={handleChange}>
                <MenuItem value={"0"}>All</MenuItem>
                <MenuItem value={"1"}>Fairfield</MenuItem>
                <MenuItem value={"2"}>Black Hawk County</MenuItem>
                <MenuItem value={"3"}>Johnson County</MenuItem>
                <MenuItem value={"3"}>Linn County</MenuItem>
                <MenuItem value={"4"}>Polk County</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
              <InputLabel id="property-label">Property Type</InputLabel>
              <Select
                name="propertyType"
                labelId="property-label"
                id="property"
                value={propertyType}
                label="Property Type"
                onChange={handleChange}>
                <MenuItem value="single family home">
                  Single-Family Home
                </MenuItem>
                <MenuItem value={"0"}>All</MenuItem>
                <MenuItem value="townhome">Townhome</MenuItem>
                <MenuItem value="bungalow">Bungalow</MenuItem>
                <MenuItem value="ranch">Ranch</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="victorian">Victorian</MenuItem>
                <MenuItem value="colonial">Colonial</MenuItem>
                <MenuItem value="container home">Container Home</MenuItem>
                <MenuItem value="split level">Split Level</MenuItem>
                <MenuItem value="houseboat">Houseboat</MenuItem>
                <MenuItem value="mediterranean">Mediterranean</MenuItem>
                <MenuItem value="tudor">Tudor</MenuItem>
                <MenuItem value="craftsman">Craftsman</MenuItem>
                <MenuItem value="tiny house">Tiny House</MenuItem>
                <MenuItem value="co op">Co-op</MenuItem>
                <MenuItem value="cabin">Cabin</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="manufactured home">Manufactured Home</MenuItem>
                <MenuItem value="mobile home">Mobile Home</MenuItem>
                <MenuItem value="mid century modern style">
                  Mid-Century Modern Style
                </MenuItem>
                <MenuItem value="cape cod">Cape Cod</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="mansion">Mansion</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
              <Button
                onClick={onSearch}
                variant="contained"
                endIcon={<SearchIcon />}>
                Search
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent={"center"}
          sx={{ mt: 3 }}>
          {properties.map((item) => {
            const href = `/property-details/${item.id}`;
            return (
              <Grid item>
                <PropertyCard property={item} href={href} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default HomePage;
