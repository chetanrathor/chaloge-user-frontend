import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { getImage } from '../assets'
import onboardingImage from '../assets/busPassOnboarding.gif'
import onboardingImage2 from '../assets/onboarding2.gif'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Onboarding = () => {
    const [onboardingStep, setOnboardingImageStep] = useState(1)
    const handelClick = (step:number)=>{
        setOnboardingImageStep(step)
    }
    return (
        <Grid container direction={'column'} paddingTop={3} paddingX={2}>
            <Grid item container justifyContent={'center'}>
                <Typography variant='h5' fontSize={'xl'} textAlign={'center'}>
                    Live track your bus
                </Typography>
            </Grid>
            <Grid item container justifyContent={'center'} marginTop={7}>
                <Box height={'58vh'}>
                    {onboardingStep === 1 && <img height={'100%'} src={onboardingImage} alt="" />}
                    {onboardingStep === 2 && <img height={'100%'} src={onboardingImage2} alt="" />}
                </Box>
            </Grid>
            <Grid item>
                <ul className="slick-dots" style={{ display: 'block' }}><li className="slick-active"><button>1</button></li><li className=""><button>2</button></li></ul>
            </Grid>
            <Grid item height={'25vh'} position={'relative'}>
                {onboardingStep === 2 && <Box>
                    <Button variant='contained' fullWidth style={{ position: 'absolute', bottom: '0' }}>
                        <Typography sx={{
                            color: '#fff'
                        }}>
                            Get Started
                        </Typography>
                    </Button>
                </Box>}

                {onboardingStep === 1 && <Box>
                    <Button variant='contained' style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                    onClick={()=>{setOnboardingImageStep(2)}}
                    >
                        <ArrowForwardIcon style={{ color: 'white' }} />

                    </Button>
                </Box>}
            </Grid>
        </Grid>
    )
}

export default Onboarding