import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import image_3 from './Assets/img3.png';
import { BsArrowRight } from 'react-icons/bs'

function Check() {
  return(
    <Box sx={{ width:"100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "flex-end", flexWrap: 'wrap', overflow: 'hidden', overflowY: 'scroll', '::-webkit-scrollbar': {width: '0'}, }}>
      <img src={image_3} alt='image' style={{ width: "auto", height: "80%", margin: "0 0 0 0" }} />
      <Box sx={{ flexGrow: "1",height: "100%", display: "flex", justifyContent: "center", flexDirection: "column", marginLeft: {xs: '20px', sm: '0'} }}>
        <Typography sx={{ color: "#333333", fontWeight: "800", fontSize: "1.5rem" }}>MEMBER AND COPYRIGHT CHECKING</Typography>
        <Typography sx={{ color: "#707070", fontSize: ".9rem", fontWeight: "600", width: "500px", margin: "0 0 50px 0"}}>Check and confirm creative souls and their works here by entering Member ID and search</Typography>
        <Box sx={{ width: "85%", height: "55px", backgroundColor: "#CCC", borderRadius: "50px", display: "flex", border: "1px solid #43B914", }}>
          <input type='text' placeholder='Enter member ID or work title here' style={{ border: "none", width: "70%", height: "100%", borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px", paddingLeft: "10px" }}/>
          <Button sx={{ backgroundColor: "#43B914", width: "30%", height: "100%", borderTopRightRadius: "50px", borderBottomRightRadius: "50px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <Typography sx={{ color: "#FFF", fontSize: ".9rem", fontWeight: "600", }}>Search</Typography>
            <BsArrowRight style={{ color: "white" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Check;