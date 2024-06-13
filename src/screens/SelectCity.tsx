import { Box, Grid, TextField, useTheme } from '@mui/material'
import React from 'react'
import selectCityBanner from '../assets/selectCityBanner.png';
import Search from '../Elements/Search';
import CityList from '../components/CityList';
const SelectCity = () => {
    const themePallet = useTheme()
    const data = [
        'Agra',
        'Agra',
        'Agra',
        'Agra',
        'Agra',
    ]
    return (
        <Grid container direction={'column'}>
            <Grid item height={'67.15px'} width={'100%'}>
                <img height={'100%'} width={'100%'} src={selectCityBanner}></img>
                <Box position={'relative'}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: themePallet.palette.background.default,
                            borderRadius: '27px',
                            outline: 'none'
                        }}
                    >

                        <Search></Search>
                    </Box>
                </Box>
            </Grid>
            <Grid item marginTop={4}>
                <Grid container direction={'column'}>
                     <CityList></CityList>
                </Grid>

            </Grid>

        </Grid>
    )
}

export default SelectCity