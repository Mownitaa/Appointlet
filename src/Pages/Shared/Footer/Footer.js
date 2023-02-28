import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#810054',marginTop:55,paddingBlock:4}}>
        <Grid>
            <Typography sx={{fontSize:20,color:'white'}}>@Appointlet | 2022</Typography>
        </Grid>
    </div>
  )
}

export default Footer