import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData,setLoginData] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}   
        newLoginData[field]= value;
        setLoginData(newLoginData);
        // console.log(field, value,newLoginData)
    };

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your Password did not match')
        }
        e.preventDefault();
    }
  return (
<Container sx={{mt:16}}>
    <Grid container spacing={2}>
    <Grid item sx={12} md={6}>
        <Typography>
            Sign Up
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
        <TextField
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
          type="password"
          name="password2"
          onChange={handleOnChange}
          placeholder="Re-enter Password"
          size="small"
        />
        <br/>
        

         <Button
        type="submit"
        variant="contained"
        sx={{width:'50%',m:1}}
        style={{backgroundColor:'#810054'}}>
          Sign Up
        </Button>
        <br/>
        <br/>
        <br/>

        <NavLink to="/login" style={{textDecoration:'none'}}>
       Already Have An Account? Please Login
        </NavLink>
        </form>
</Grid>
    </Grid>
</Container>  )
}

export default Register