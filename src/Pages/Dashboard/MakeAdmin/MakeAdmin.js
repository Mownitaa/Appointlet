import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

export const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit= e => {
        e.preventDefault()
    }
  return (
    <div style={{marginTop:'30%'}}>
        <h2>Make An Admin</h2>
        <form onSubmit={handleAdminSubmit}>
        <TextField 
        label="Email"
        type="email"
        onBlur={handleOnBlur}
        variant="standard"
        />
        <Button type="submit" variant="contained">Make Admin</Button>
        </form>
    </div>
  )
}
