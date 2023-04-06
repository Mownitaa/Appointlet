import * as React from 'react';
import { Grid } from '@mui/material'
import Calender from '../../Shared/Calender/Calender'
import Appopintments from '../Appopintments/Appopintments'

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

  return (
        <Grid sx={{mt:3}} container spacing={2} >
              <Grid xs={12} sm={6}>
                <Calender
                date={date}
                setDate={setDate}></Calender>
                </Grid>

                <Grid xs={12} sm={6}>
                <Appopintments date={date}></Appopintments>
                </Grid>
           </Grid>
  )
}

export default DashboardHome