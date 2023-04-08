import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData] = useState({})
const history = useHistory();
  const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}   
        newLoginData[field]= value;
        console.log(newLoginData);
        setLoginData(newLoginData);
        // console.log(field, value,newLoginData)
    };

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
          // <Alert severity="error">
          //   Password did not match
          // </Alert>
          alert('Your Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
  return (
<Container sx={{mt:16,mb:23}}>
    <Grid item xs={12} md={6}>
        <Typography
         sx={{fontSize:50,fontWeight:"bold"}}
         style={{color:'#810054'}}
         >
            Sign Up
        </Typography>

       { !isLoading && <form onSubmit={handleLoginSubmit}>
        <TextField
          id="outlined-size-small"
          sx={{width:'60%',m:1}}
          type="text"
          name="name"
          onChange={handleOnBlur}
          placeholder="Your Name"
          size="small"
        />
        <TextField
          id="outlined-size-small"
          sx={{width:'60%',m:1}}
          type="email"
          name="email"
          onChange={handleOnBlur}
          placeholder="Your Email"
          size="small"
        />
        <TextField
          id="outlined-size-small"
          sx={{width:'60%',m:1}}
          type="password"
          name="password"
          onChange={handleOnBlur}
          placeholder="Password"
          size="small"
        />
        <TextField
          id="outlined-size-small"
          sx={{width:'60%',m:1}}
          type="password"
          name="password2"
          onChange={handleOnBlur}
          placeholder="Re-enter Password"
          size="small"
        />
        <br/>
        

         <Button
        type="submit"
        variant="contained"
        sx={{width:'30%',m:1}}
        style={{backgroundColor:'#810054'}}>
          Sign Up
        </Button>
<br/>

        <NavLink to="/login" style={{textDecoration:'none'}}>
            Already Have An Account? Please Login
        </NavLink>
        </form>}

        {isLoading && <CircularProgress/>}
        {
          user?.email && <Alert  sx={{mt:8}} severity="success">
            User created successfully!
          </Alert>
        }
        {
          authError && <Alert severity="error">
            {authError}
          </Alert>
        }
</Grid>
</Container>  )
}

export default Register