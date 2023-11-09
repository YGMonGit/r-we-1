import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import logo_w from './Assets/logo-w.png';
import { AiOutlineUp } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return(
    <Box sx={{ backgroundColor: "#1D212A", width:"100%", height: "410px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Box sx={{ width: "100%", flex: "1", display: "flex", justifyContent: "center", alignItems: "center", gap: "50px"}}>
        <Box sx={{ height: "70%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column" }}>
          <img src={logo_w} alt='image' style={{ width: "150px", height: "auto", margin: "0 0 20px 0" }} />
          <Typography sx={{ color: "#FFFFFF", fontSize: ".8rem", width: "290px", margin: "0 0 40px 0" }}>Our aim is to collaborate with CMO’s and other interested parties to ensure the collection of these rights are as efficient and streamlined as they can be and that all performers receive the income they are rightfully entitled to.</Typography>
          <Box sx={{height: "30px", width: "100%", display: "flex", gap: "10px"}}>
            <AiFillFacebook style={{ height: "15px", padding: "5px 5px", width: "15px", backgroundColor: "#171A21", color: "#8B8D94", borderRadius: "50px"}}/>
            <AiOutlineTwitter style={{ height: "15px", padding: "5px 5px", width: "15px", backgroundColor: "#171A21", color: "#8B8D94", borderRadius: "50px"}}/>
            <FaGooglePlusG style={{ height: "15px", padding: "5px 5px", width: "15px", backgroundColor: "#171A21", color: "#8B8D94", borderRadius: "50px"}}/>
            <FaLinkedinIn style={{ height: "15px", padding: "5px 5px", width: "15px", backgroundColor: "#171A21", color: "#8B8D94", borderRadius: "50px"}}/>
          </Box>
        </Box>
        <Box sx={{ width: "15%", height: "70%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column" }}>
          <Typography sx={{ color: "#FFFFFF", fontSize: "1.1rem", fontWeight: "800", margin: "0 0 20px 0" }}>Useful Links</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 5px 0" }}>About</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 5px 0" }}>Our Story</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 5px 0" }}>Professional Team</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 5px 0" }}>Services</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 5px 0" }}>Testimonials</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 5px 0" }}>Copyright</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 5px 0" }}>Contacts</Typography>
        </Box>
        <Box sx={{ width: "20%", height: "70%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column" }}>
          <Typography sx={{ color: "#FFFFFF", fontSize: "1.1rem", fontWeight: "800", margin: "0 0 20px 0" }}>Contact Us</Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 20px 0" }}>Phone: <span style={{ color: "white" }}>+251 - 911 - 233 - 445</span></Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 0px 0" }}>Monday - Friday from <span style={{ color: "white" }}>9.00 am to 8.00 pm</span></Typography>
          <Typography sx={{ color: "#C0C0C0", fontSize: ".7rem", fontWeight: "200", margin: "0 0 20px 0" }}>Saturday from <span style={{ color: "white" }}>10.00 am to 6.00 pm</span></Typography>
          <Typography sx={{ color: "#1DEF55", fontSize: ".7rem", fontWeight: "200" }}>info@cncm.com</Typography>
          <Typography sx={{ color: "#1DEF55", fontSize: ".7rem", fontWeight: "200" }}>support@cncm.com</Typography>
        </Box>
      </Box>
      <Box sx={{height: "50px", width: "80%", borderTop: "1px solid #666", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "100px" }}>
        <Typography sx={{ color: "#707070", fontSize: ".7rem", fontWeight: "500", marginLeft: "110px" }}>&copy; 2021 <span style={{ color: "#1DEF55"}}>CNCM</span> - Copyright and neighboring right collective management society of Ethiopia.</Typography>
        <Typography sx={{ color: "#707070", fontSize: ".7rem", fontWeight: "500", marginRight: "110px" }}>Back to top <AiOutlineUp style={{ color: "#1DEF55", marginLeft: "5px" }} /></Typography>
      </Box>
    </Box>
  );

}

export default Footer;