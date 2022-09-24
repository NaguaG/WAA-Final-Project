import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toogleSideBar } from '../../store/slices/sidebar/sidebarSlice';

const firstList = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Properties", to: "/dashboard/propertities" },
  { label: "Users", to: "/dashboard/users" }
];
const secondList = [
  { label: "Fav List", to: "/dashboard/fav" },
  { label: "Other", to: "/dashboard/other" }
];

export default function CustomDrawer(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    // setState(!state);
    dispatch(toogleSideBar())
  }
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {firstList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() =>  text.label == 'Dashboard' ? navigate(text.to) : alert('Custome Link Here')} >
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(text.to)} >
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
