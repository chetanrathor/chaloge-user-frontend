import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountCircle } from '@mui/icons-material';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const Authentication = () => {
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
                        label={<span style={{ fontSize: '20px' }}>Enter Your Number</span>}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    +91
                                </InputAdornment>
                            ),
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
                    We will send you an SMS with a 6-digit verification code
                </Typography>
            </Grid>

            <Grid item container marginTop={4}>
                <Grid container marginX={1}>
                    <Button variant='contained' fullWidth>
                        <Typography sx={{
                            color: '#fff'
                        }}>
                            Continue
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid item container marginTop={4} justifyContent={'center'}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: '#000000a3',
                        textAlign: 'center'
                    }}
                >
                    Or
                </Typography>
            </Grid>
            <Grid item container marginTop={2} justifyContent={'center'}>
                <GoogleOAuthProvider clientId="267091578147-5meeptte2v52n9pirtg8m178089k6oh2.apps.googleusercontent.com">
                    <GoogleLogin
                    // size='medium'
                    width={'100%'}
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
            </Grid>
        </Grid>
    )
}

export default Authentication