import { Button, Container, Grid, TextField, Typography,CircularProgress, Alert } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
const [loginData,setLoginData] = useState({});
const {user, loginUser,signInWithGoogle, isLoading, authError} = useAuth();

const location = useLocation();
const history = useHistory();


    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}   
        newLoginData[field]= value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e =>{
      loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }


  return (
<Container sx={{mt:16,mb:25}}>
    <Grid item xs={12} md={6}>
        <Typography
         sx={{fontSize:50,fontWeight:"bold"}}
         style={{color:'#810054'}}
         >
            Login
        </Typography>

        <form onSubmit={handleLoginSubmit}>
        <TextField
          id="outlined-size-small"
          sx={{width:'60%',m:1}}
          type="email"
          name="email"
          onChange={handleOnChange}
          placeholder="Your Email"
          size="small"
        />
        <TextField
          id="outlined-size-small"
          sx={{width:'60%',m:1}}
          type="password"
          name="password"
          onChange={handleOnChange}
          placeholder="Password"
          size="small"
        />
        <br/>
        

         <Button
        type="submit"
        variant="contained"
        sx={{width:'30%',m:1}}
        style={{backgroundColor:'#810054'}}>
          Login
        </Button>
        <br/>

        <NavLink to="/register" style={{marginTop:10,textDecoration:'none'}}>
        New User? Please Register
        </NavLink>

        <p>--------------------------------------</p>
        <Button onClick={handleGoogleSignIn} style={{backgroundColor:'#810054'}} variant="contained">Google Sign in</Button>
        <br/>
        <br/>
        {isLoading && <CircularProgress/>}
        {
          user?.email && <Alert sx={{mt:8}} severity="success">
            User login successfull!
          </Alert>
        }
        {
          authError && <Alert severity="error">
            {authError}
          </Alert>
        }
        </form>

      
</Grid>
</Container>
  )
}

export default Login