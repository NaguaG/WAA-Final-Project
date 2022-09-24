import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import CustomDrawer from './CustomDrawer';

const anchor = 'left';

export default function Dashboard() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  }


  return (
    <>
      <Button onClick={toggleDrawer} variant="contained">Open Draw</Button>
      <Drawer
        anchor={anchor}
        open={state}
        onClose={toggleDrawer}
      >
        {<CustomDrawer setState={setState}/> }
      </Drawer>
    </>
  )
}
