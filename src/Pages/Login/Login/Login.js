import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
const [loginData,setLoginData] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}   
        newLoginData[field]= value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e =>{
        e.preventDefault();
        alert('hello')
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
        </form>
</Grid>
    </Grid>
</Container>
  )
}

export default Login