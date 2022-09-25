import { Button, Container, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function CreateProperty() {
  return (
    <Container fixed>
      <h1>CreateProperty</h1>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField label="Title" variant="outlined" />
        </FormControl>

        <Grid item container sx={{ m: 0, mr: 1 }} spacing={1} direction="row"
          alignItems="center"
          justify="center">
          <Grid item xs={12}>

            <TextField fullWidth sx={{ mr: 1 }}
              id="outlined-multiline-flexible"
              label="No of room"
              value={''}

            />
          </Grid>
          <Grid item xs={12}>

            <TextField fullWidth sx={{ mr: 1 }}
              id="outlined-multiline-flexible"
              label="Price"
              value={''}

            />
          </Grid>
          <Grid item xs={12}>
            {/* // Property type */}
            <FormControl fullWidth>
              <InputLabel id="ptype-simple-select">Property Type</InputLabel>
              <Select
                labelId="pt-simple-select-label"
                id="p-simple-select"
                value={''}
                label="Age"
                onChange={() => { }}
              >
                <MenuItem value='bungalow'>Single-Family Home</MenuItem>
                <MenuItem value='bungalow'>Townhome</MenuItem>
                <MenuItem value='bungalow'>Bungalow</MenuItem>
                <MenuItem value='bungalow'>Ranch</MenuItem>
                <MenuItem value='bungalow'>Condos</MenuItem>
                <MenuItem value='bungalow'>Victorian</MenuItem>
                <MenuItem value='bungalow'>Colonial</MenuItem>
                <MenuItem value='bungalow'>Container Home</MenuItem>
                <MenuItem value='bungalow'>Split Level</MenuItem>
                <MenuItem value='bungalow'>Houseboat</MenuItem>
                <MenuItem value='bungalow'>Mediterranean</MenuItem>
                <MenuItem value='bungalow'>Tudor</MenuItem>
                <MenuItem value='bungalow'>Craftsman</MenuItem>
                <MenuItem value='bungalow'>Tiny House</MenuItem>
                <MenuItem value='bungalow'>Co-op</MenuItem>
                <MenuItem value='bungalow'>Cabin</MenuItem>
                <MenuItem value='bungalow'>Apartment</MenuItem>
                <MenuItem value='bungalow'>Manufactured Home</MenuItem>
                <MenuItem value='bungalow'>Mobile Home</MenuItem>
                <MenuItem value='bungalow'>Mid-Century Modern Style</MenuItem>
                <MenuItem value='bungalow'>Cape Cod</MenuItem>
                <MenuItem value='bungalow'>Farmhouse</MenuItem>
                <MenuItem value='bungalow'>Mansion</MenuItem>



              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12}>
            {/* home type */}
            <FormControl fullWidth>
              <InputLabel id="htype-simple-select">Home Type</InputLabel>
              <Select
                labelId="ht-simple-select-label"
                id="h-simple-select"
                value={''}
                label="Age"
                onChange={() => { }}
              >
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="multi-family">Multi family</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="condo">Condo</MenuItem>
                <MenuItem value="mobile-manufactured">Mobile / Manufactured</MenuItem>
                <MenuItem value="coop-unit">Coop Unit</MenuItem>
                <MenuItem value="vacant-land">Vacant land</MenuItem>
                <MenuItem value="other">Other</MenuItem>
                <MenuItem value="single-family">Single family</MenuItem>

              </Select>
            </FormControl>

          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="sell-radio-buttons">Is For Sell</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>

            <FormControl>
              <FormLabel id="rent-radio-buttons">Is For Rent</FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item>
            <Button variant="contained" onClick={() => alert('Clicked')}>Submit</Button>
          </Grid>
        </Grid>

      </Box>


      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
      {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      {/* </FormControl> */}

    </Container>
  )
}
