import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  MenuItem
} from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DrawerComp = () => {
  
//get user
const {user,logout} = useAuth();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
      <List>
        <ListItemButton
          sx={{ marginLeft: "auto",
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column'}}
          indicatorColor="secondary"
          textColor="inherit">
        <NavLink to="/services" style={{color:'#810054',textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Services</MenuItem></NavLink>
            <NavLink to="/about" style={{color:'#810054',textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>About</MenuItem></NavLink>
            <NavLink to="/appointment" style={{color:'#810054', textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Appointment</MenuItem></NavLink>
            <NavLink to="/contact" style={{color:'#810054',textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Contact</MenuItem></NavLink>
            
            {/* {
               user?.email ?
               <Button onClick={logout} style={{backgroundColor:'#810054'}}  sx={{ marginTop:'7px',marginLeft: "15px",marginBottom:'15px'}} variant="contained">
                 Logout
               </Button>
              : */}
              <NavLink to="/login" style={{textDecoration:'none'}}>
            <Button style={{backgroundColor:'#810054'}} sx={{ marginTop:'7px',marginLeft: "15px",marginBottom:'15px'}} variant="contained">
            Login
          </Button>
            </NavLink>
            {/* } */}
            
          <NavLink to="/register" style={{textDecoration:'none'}}>
          <Button style={{backgroundColor:'#810054'}}  sx={{ marginLeft: "15px" }} variant="contained">
            SignUp
          </Button>
          </NavLink>
        </ListItemButton>
      </List>



      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon  style={{
                color:'#810054'
              }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;