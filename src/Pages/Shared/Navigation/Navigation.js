import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import { MenuItem } from '@mui/material';
import { Button,Toolbar,Tabs,useMediaQuery,useTheme } from '@mui/material';

import logo from "../../../images/logo.PNG"

import DrawerComp from './Drawer';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {

//get user
const {user,logout} = useAuth();


  const [value, setValue] = useState();
  
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  // console.log(isMatch);
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
           <img  alt="" style={{width:20, height:23}} src={logo}/>
            <NavLink to="/" style={{ textDecoration: 'none'}}><MenuItem style={{fontSize: "25px",fontWeight:'bold',color:'#810054'}}>Appointlet</MenuItem></NavLink>
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


    {/* <div style={{marginTop:0,color:'white',backgroundColor: '#810054'}}>
    <div style={{textAlign:'left',paddingLeft:55}}>Follow health updates
      
      <FontAwesomeIcon style={{paddingLeft:9}} icon={faFacebookSquare} />
      <FontAwesomeIcon style={{paddingInline:24}} icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faLinkedin} />


      <span style={{marginLeft:'52%'}}>
      <FontAwesomeIcon style={{paddingRight:3}} icon={faPhoneSquare}/>
019******79
<FontAwesomeIcon style={{paddingLeft:30,paddingRight:3}} icon={faMailBulk}/>
appointlet@appointlet.com
</span>
      </div> 
    </div>*/}
</div>
            <Box>
              <Toolbar style={{paddingLeft:'30px', backgroundColor:'#fff'}}>
              <img  alt="" style={{width:20, height:23}} src={logo}/>

              <NavLink to="/" style={{textDecoration: 'none'}}><MenuItem sx={{marginLeft:'-8px', fontSize: "1.5rem",fontWeight:'bold',color:'#810054'}}>Appointlet</MenuItem></NavLink>

            <Tabs
              sx={{ marginLeft: "18%" , marginRight:"15%"}}

              value={false}
              onChange={(e, value) => setValue(value)} 
            >
              <NavLink to="/services" style={{color:'#810054', textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Services</MenuItem></NavLink>

              <NavLink to="/appointment" style={{color:'#810054',paddingLeft: 13, textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Appointment</MenuItem></NavLink>
              <NavLink to="/about" style={{color:'#810054',paddingLeft: 13, textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>About</MenuItem></NavLink>

              <NavLink to="/contact" style={{color:'#810054',paddingLeft: 13, textDecoration: 'none'}}><MenuItem style={{fontSize:'1.2rem'}}>Contact</MenuItem></NavLink>
            </Tabs>
            {
              user?.email ?
              <Box>
                <Button onClick={logout} style={{backgroundColor:'#810054'}}  variant="contained">
              Logout
            </Button>
            <NavLink to="/dashboard" style={{marginLeft:'5px',textDecoration:'none'}}>
            <Button style={{backgroundColor:'#810054'}} sx={{ marginLeft: "auto" }} variant="contained">
              Dashboard
            </Button>
            </NavLink>
              </Box>
              :
              <NavLink to="/login" style={{textDecoration:'none'}}>
            <Button style={{backgroundColor:'#810054'}} sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
            </NavLink>
            }
            {/* <NavLink to="/register" style={{textDecoration:'none'}}>
            <Button style={{backgroundColor:'#810054'}}  sx={{ marginLeft: "10px" }} variant="contained">
              SignUp
            </Button>
            </NavLink> */}
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