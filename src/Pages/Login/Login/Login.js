import { Button, Container, Grid, TextField, Typography,CircularProgress, Alert } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
const [loginData,setLoginData] = useState({})
const [user, loginUser, isLoading, authError] = useAuth();

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
  return (
<Container sx={{mt:16}}>
    <Grid container spacing={2}>
    <Grid item sx={12} md={6}>
        <Typography>
            Login
        </Typography>

        <form onSubmit={handleLoginSubmit}>
        <TextField
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
          type="email"
          name="email"
          onChange={handleOnChange}
          placeholder="Your Email"
          size="small"
        />
        <TextField
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
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
        sx={{width:'50%',m:1}}
        style={{backgroundColor:'#810054'}}>
          Login
        </Button>
        <br/>

        <NavLink to="/register" style={{textDecoration:'none'}}>
        New User? Please Register
        </NavLink>
        {isLoading && <CircularProgress/>}
        {
          user?.email && <Alert severity="success">
            User created successfully!
          </Alert>
        }
        {
          authError && <Alert severity="success">
            {authError}
          </Alert>
        }
        </form>
</Grid>
    </Grid>
</Container>
  )
}

export default Login