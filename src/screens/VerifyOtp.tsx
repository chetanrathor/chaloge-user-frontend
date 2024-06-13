import { Button, Grid, InputAdornment, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountCircle } from '@mui/icons-material';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const VerifyOtp = () => {
    const themePallet = useTheme()
    return (
        <Grid container direction={'column'}>
            <Grid item container px={1} py={2} alignItems={'center'} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 6px 2px'
            }}>
                <Grid item>
                    <ArrowBackIcon></ArrowBackIcon>
                </Grid>
                <Grid item marginLeft={2}>
                    <Typography sx={{ fontSize: '21px' }} >
                        Verify Your Number
                    </Typography>
                </Grid>
            </Grid>
            <Grid item marginTop={4} marginLeft={2}>
                <Grid item >
                    <TextField
                        id="input-with-icon-textfield"
                        label={<span style={{ fontSize: '20px' }}>Enter OTP</span>}
                        fullWidth
                        InputProps={{
                        }}
                        variant="standard"
                    />
                </Grid>

            </Grid>

            <Grid item container justifyContent={'center'} marginTop={1}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: '#000000a3',
                        textAlign: 'center'
                    }}
                >
                   Please enter 6 digit SMS verification code we have sent you.
                </Typography>
            </Grid>

            <Grid item container marginTop={4}>
                <Grid container marginX={1}>
                    <Button variant='contained' fullWidth>
                        <Typography sx={{
                            color: '#fff'
                        }}>
                            Verify
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
          
            <Grid item container direction={'column'} justifyContent={'center'} marginTop={2}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: '#000000a3',
                        textAlign: 'center'
                    }}
                >
                   Didn't receive our SMS? Retry in 00:11
                </Typography>
                
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: themePallet.palette.primary.main,
                        textAlign: 'center'
                    }}
                >
                   Resend SMS
                </Typography>
            </Grid>
        </Grid>
    )
}

export default VerifyOtp