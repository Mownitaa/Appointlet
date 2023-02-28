import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import { MenuItem } from '@mui/material';
import { Button,Toolbar,Tabs,Tab,useMediaQuery,useTheme,Typography, Link } from '@mui/material';

import logo from "../../../images/logo.PNG"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faLinkedin,faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

import DrawerComp from './Drawer';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';


const Navigation = () => {


  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(isMatch);
  return (
  <div>

  <div 
  style={{
    position:'static',
    top:0,
    }}
  >
    <React.Fragment>
    <AppBar
    style={{
    paddingTop:20,
    paddingBottom:6,
    color:'#810054',
    backgroundColor:'#ffff',
    overflow:'hidden',
    zIndex:1,
    }}>
      <AppBar>
          {isMatch ? (
          <>
          <Toolbar style={{backgroundColor:'#fff'}}>
           <img style={{width:20, height:23}} src={logo}/>
            <NavLink to="/" style={{ textDecoration: 'none'}}><MenuItem style={{fontSize: "1.5rem",fontWeight:'bold',color:'#810054'}}>Appointlet</MenuItem></NavLink>
            <DrawerComp/>
            </Toolbar>
          </>
          
        ) : (
          
          <>
          <div
      style={{
      width:'100%',
      position:'sticky',
      zIndex:2,
    }}
    >


    <Typography style={{marginTop:0,color:'white',backgroundColor: '#810054'}}>
    <Typography style={{textAlign:'left',paddingLeft:55}}>Follow health updates
      
      <FontAwesomeIcon style={{paddingLeft:9}} icon={faFacebookSquare} />
      <FontAwesomeIcon style={{paddingInline:24}} icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faLinkedin} />


      <span style={{marginLeft:'52%'}}>
      <FontAwesomeIcon style={{paddingRight:3}} icon={faPhoneSquare}/>
01927951179
<FontAwesomeIcon style={{paddingLeft:30,paddingRight:3}} icon={faMailBulk}/>
appointlet@appointlet.com
</span>
      </Typography>
    </Typography>
</div>
            <Box>
              <Toolbar style={{backgroundColor:'#fff'}}>
              <img style={{width:20, height:23}} src={logo}/>

              <NavLink to="/" style={{textDecoration: 'none'}}><MenuItem sx={{ fontSize: "1.5rem",fontWeight:'bold',marginLeft:'-7%',color:'#810054'}}>Appointlet</MenuItem></NavLink>

            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <NavLink to="/services" style={{color:'#810054', textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Services</MenuItem></NavLink>
              <NavLink to="/about" style={{color:'#810054',paddingLeft: 13, textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>About</MenuItem></NavLink>
              <NavLink to="/appointment" style={{color:'#810054',paddingLeft: 13, textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Appointment</MenuItem></NavLink>
              <NavLink to="/contact" style={{color:'#810054',paddingLeft: 13, textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Contact</MenuItem></NavLink>
            </Tabs>
            <Button style={{backgroundColor:'#810054'}} sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
            <Button style={{backgroundColor:'#810054'}}  sx={{ marginLeft: "10px" }} variant="contained">
              SignUp
            </Button>
            </Toolbar>
            </Box>
          </>
        )}
        
      </AppBar>
      
    </AppBar>
  </React.Fragment>

    </div>
    </div>
  )
}

export default Navigation