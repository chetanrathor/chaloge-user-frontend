import { Grid } from '@mui/material';
import './App.css'
import Home from './screens/Home';
import SelectCity from './screens/SelectCity';
import Splash from './screens/Splash';
import Authentication from './screens/Authentication';
import Onboarding from './screens/Onboarding';
import VerifyOtp from './screens/VerifyOtp';


function App() {
  return (
    <>
      <Grid height={'100vh'}>

        {/* <Splash></Splash> */}
        {/* <SelectCity></SelectCity> */}
        {/* <Home></Home> */}
        {/* <Authentication></Authentication> */}
        {/* <Onboarding></Onboarding> */}
        <VerifyOtp></VerifyOtp>
      </Grid>
    </>
  )
}

export default App
