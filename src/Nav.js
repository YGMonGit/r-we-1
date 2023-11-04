import * as React from 'react';
// import logo from './logo.png';
import { Box, Typography } from '@mui/material';

const logo = new URL('./Assets/logo.png', import.meta.url);

function Nav() {

  return (
    <Box sx={{ background: "#FFFFFF", width: "100vw", height: "80px", boxShadow: "0px 3px 6px #00000029", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
      <Box sx={{ backgroundColor: "transparent", width: "60%", minHeight: "60px", height: "75%", marginLeft: "139px" , display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box sx={{ width: "150px", height: "90%" }}>
          <img src={logo} alt='hi' style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box sx={{ width: "55%", height: "90%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Typography variant='subtitle2'>OUR WORKS</Typography>
          <Typography variant='subtitle2'>SOLUTIONS</Typography>
          <Typography variant='subtitle2'>BECOME PARTNER</Typography>
          <Typography variant='subtitle2'>BLOG</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Nav;