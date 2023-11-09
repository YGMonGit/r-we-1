import * as React from 'react';
import logo from './Assets/logo.png';
import { Box, Typography } from '@mui/material';
import { CiMenuBurger } from 'react-icons/ci';

//const logo = new URL('./Assets/logo.png', import.meta.url);

function Nav() {

  return (
    <Box sx={{ borderTop: "1px solid black", background: "#FFFFFF", width: "100vw", height: "80px", boxShadow: "0px 3px 6px #00000029", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ backgroundColor: "green", width: "60%", minHeight: "60px", height: "75%", marginLeft: "139px" , display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box sx={{ width: "150px", height: "90%" }}>
          <img src={logo} alt='hi' style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box sx={{ width: "55%", backgroundColor: "red", height: "90%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Typography variant='subtitle2'>OUR WORKS</Typography>
          <Typography variant='subtitle2'>SOLUTIONS</Typography>
          <Typography variant='subtitle2'>BECOME PARTNER</Typography>
          <Typography variant='subtitle2'>BLOG</Typography>
        </Box>
      </Box>
      <CiMenuBurger color='black' size={30} style={{  }}/>
    </Box>
  )
}

export default Nav;