import { Box, Grid, Input, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChaloLogo from '../assets/ChaloLogo';
import Search from '../Elements/Search';
import passIcon from '../assets/passIcon.png'
import { GMobiledata, Spa } from '@mui/icons-material';
import userIcon from '../assets/userIcon1.png'
import searchIcon from '../assets/searchIcon.png'
const Home = () => {
    const services = [
        'bus pass',
        'bus pass',

    ]

    

    return (
        <Grid container direction={'column'}>
            {/* Top Header Search */}
            <Grid container direction={'column'}
                sx={{
                    position: 'relative',
                    backgroundColor: '#FFCE6C',
                    height: '100px',
                    borderRadius: '0 0 30% 30%',
                    padding: 2
                }} >
                <Grid item container direction={'row'} alignItems={'center'}>
                    <Grid item style={{
                        borderRadius: '60%',
                        backgroundColor: '#FFF',
                        width: '36px',
                        height: '36px'
                    }}>

                        <img height={'100%'} width={'100%'} src={userIcon} />
                    </Grid>
                    <Grid item xs={9} container justifyContent={'center'}>
                        <Box >
                            <ChaloLogo height={'18px'} width={'78px'} ></ChaloLogo>
                        </Box>
                    </Grid>

                </Grid>
                <Grid item position={'relative'}  >
                    <Input
                        style={{
                            position: 'absolute',
                            padding: 10,
                            paddingLeft: 15,
                            width: '100%',
                            backgroundColor: '#FFF',
                            borderRadius: '27px',
                            border: 'none !important',
                            outline: 'none !important',
                            fontSize:'14px',
                            color:'#000'
                        }}
                        inputProps={{
                            className:'no-pseudo-input'
                        }}
                        defaultValue={'Enter destination or bus number'}
                        startAdornment={
                   <img src={searchIcon} style={{marginRight:'10px'}} width={'24px'}  alt="" />
                        }
                    ></Input>
                </Grid>
            </Grid>
            <Grid item marginTop={3} style={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                borderRadius:'5px'
            }} >
                <Box bgcolor={'#FFF6E6'} p={1}>
                    Due to the election code of conduct, only renewals
                    of the subsidised passes will be available.
                </Box>
            </Grid>
            {/* MIDDLE SECTION */}
            <Grid container direction={'column'}>
                <Grid item container direction={'row'}>
                    <Grid item xs={8}>
                        <Typography variant='h3' sx={{
                            fontSize:'18px',
                            color:'#000',
                            fontWeight:'bold'

                        }}>
                            Buy bus ticket / pass
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography >
                            See All
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container marginTop={2} justifyContent={'space-between'}>
                    {
                        services.map((item) => (
                            <Grid item width={'48%'} container alignItems={'center'} gap={1} p={1} sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
                            }}>
                                <Grid item>
                                    <img src={passIcon} alt="" />
                                </Grid>
                                <Grid item>
                                    Bus Pass
                                </Grid>
                            </Grid>
                        ))
                    }

                </Grid>

                {/* <Grid item container direction={'column'}>
                    <Grid ></Grid>
                </Grid> */}

            </Grid>
        </Grid>
    )
}

export default Home