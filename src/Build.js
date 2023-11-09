import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import image_2 from './Assets/img2.png';

function Build() {
  return(
    <Box sx={{ width:"100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1D212A", gap: "100px" }}>
      <img src={image_2} alt='Ethiopia map image' style={{ width: "35%", height: "auto", margin: "0 0 0 0" }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ color: "#1DEF55", fontWeight: "700", fontSize: "1.3rem" }}>We’re Building a</Typography>
        <Typography sx={{ color: "#1DEF55", fontWeight: "800", fontSize: "2rem", margin: "-10px 0 10px 0" }}>Community of Coverage</Typography>
        <Typography sx={{ color: "#FFFFFF", fontSize: ".8rem", width: "390px", margin: "0 0 40px 0" }}>With provider copyright and neighboring right across the Ethiopia, our professionals are both personally invested in your case and well acquainted with local laws and regulations.</Typography>

        <Box sx={{ backgroundColor: "#F5F5F5", width: "450px", height: "70px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <Box sx={{ width: "65%", display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "#1DEF55", fontWeight: "700", fontSize: ".8rem" }}>Download Brochure</Typography>
            <Typography sx={{ color: "#333333", fontWeight: "800", fontSize: ".6rem" }}>Get in detail what we offer, we stand for your Royalty</Typography>
          </Box>
          <Button variant="contained" sx={{ color: "#000",fontWeight: "700", fontSize: ".6rem", backgroundColor: "#1DEF55"}}>DOWNLOAD NOW</Button>
        </Box>

      </Box>
    </Box>
  );
}

export default Build;