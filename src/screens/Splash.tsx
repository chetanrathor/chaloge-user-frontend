import { Grid } from '@mui/material'
import React from 'react'
import { getImage } from '../assets'
import ChaloLogo from '../assets/ChaloLogo'

const Splash = () => {
  return (
    <Grid container height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Grid item>
          <ChaloLogo></ChaloLogo>
        </Grid>
    </Grid>
  )
}

export default Splash