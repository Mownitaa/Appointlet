import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react'

export const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit= e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then (res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
  return (
    <div style={{marginTop:'12%', marginBottom:'28%'}}>
        <h2>Make An Admin</h2>
        <form onSubmit={handleAdminSubmit}>
        <TextField 
        sx={{width:'50%'}}
        label="Email"
        type="email"
        onBlur={handleOnBlur}
        variant="standard"
        />
        <Button type="submit" variant="contained">Make Admin</Button>
        </form>
        <br/>
        <br/>
        {success && <Alert severity="success">Made Admin Successfully!</Alert>}
    </div>
  )
}
