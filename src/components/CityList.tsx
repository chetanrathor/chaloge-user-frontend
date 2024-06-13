import { Box, Grid } from '@mui/material'
import React from 'react'

const CityList = () => {
    const cities = [
        'Agra',
        'Agra',
        'Agra',
        'Agra',
        'Agra',
    ]
    return (
        <>
            {
                cities.map((item, index) => {
                    return (
                        <Grid item key={index} py={3} borderBottom={'1px solid #000'}>
                            <Box sx={{
                                // backgroundColor: themePallet.palette.background.default,
                                borderRadius: '27px',
                                outline: 'none'
                            }}>
                                {item}
                            </Box>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default CityList