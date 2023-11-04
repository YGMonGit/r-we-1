import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';

const image_1 = new URL('./Assets/img1.png', import.meta.url);

function Dashboard() {
  return (
    <Box sx={{ backgroundImage: `url(${image_1})`, backgroundSize: "cover", width:"100%", height: "86%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: "65%", height: "45%", marginTop: "110px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
        <Typography variant='subtitle2' sx={{ color: "#1DEF55", fontWeight: "bold"}}>WORKING TOGETHER FOR</Typography>
        <Typography variant='h1' sx={{ color: "white", fontWeight: "bold", fontSize: "3.3vw", display: "inline-block" }}>COPYRIGHT & NEIGHBORING RIGHTS</Typography>
        <Typography variant='body2' sx={{ width: "73%", color: "white", textAlign: "center", fontSize: "1.1rem", fontWeight: "lighter", letterSpacing: "0.36px", marginTop: "10px" }}>
          We are a society standing for copyrights & Neighboring rights for the creative industry over all the country, striving to attain a well mannered society avoiding stilling minds.
        </Typography>
        <Box sx={{ flex: "1", width: "100%", display: "flex" , justifyContent: "center", alignItems: "flex-end" }}>
          <Button variant="outlined" sx={{ borderRadius: "0", border: "1px solid #1DEF55", color: "black", backgroundColor: "#1DEF55" }}>VIEW MORE</Button>
          <Button variant="outlined" sx={{ marginLeft: "10px", borderRadius: "0", border: "1px solid #A1A1A1", color: "white" }}>CONTACT US</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard;