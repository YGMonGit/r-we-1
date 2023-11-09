import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { CoverInfo } from './data';
import { AiOutlineMinus } from 'react-icons/ai'
import logo from './Assets/logo-lg.png';

function Cover() {
  return (
    <Box sx={{ height: "780px", width: "100%", backgroundImage: "linear-gradient(white 40%, #1D212A 40%)", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: 'column' }}>
      <Box sx={{ height: "20%", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center", flexDirection: "column"}}>
        <Typography variant='h4' sx={{ color: "#333", fontWeight: "bolder", display: "inline-block" }}>WHAT WE COVER</Typography>
        <Typography variant='subtitle2' sx={{ color: "#1DEF55", fontWeight: "bold", margin: "0 0 40px 0"}}>We're taking legal representation for different sectors</Typography>
      </Box>
      <Box sx={{ height: "30%", width: "100%", backgroundColor: "transparent", display: "flex", justifyContent: "space-evenly", alignItems: "flex-end" }}>
        {CoverInfo.map((item) => (
            <Box sx={{ height: "100%", width: "180px", backgroundColor: "#FFF", borderRadius: "5px", boxShadow: "0px 5px 24px #00000017", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }} key={item.id}>
              <img src={`${item?.imageSrc}`} alt='hi' style={{ width: "auto", height: "50px", margin: "40px 0 20px 0" }} />
              <Typography variant='body2' sx={{ fontWeight: "bold", color: "#333" }}>{item.title}</Typography>
              <Typography variant='caption' sx={{ width: "130px", height: "40px", color: "#555", fontWeight: "lighter", textAlign: "center", fontSize: ".5rem", margin: "10px 0 10px 0"}}>{item.topic}</Typography>
              <Typography variant='body1' sx={{ color:`${item.colors}`, lineHeight: "10px", fontSize: "2rem"}}> <AiOutlineMinus /> </Typography>
            </Box>
        ))}
      </Box>
      <Box sx={{ height: "50%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ width: "15%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={`${logo}`} alt='hi'  style={{ height: "200px", width: "auto" }}/>
          </Box>
          <Box sx={{ width: "45%", height: "100%", backgroundColor: "#1D212A", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
            <Typography variant='subtitle2' sx={{ color: "#1DEF55", fontWeight: "bold", margin: "0 0 40px 100px"}}>HOW WE STARTED</Typography>
            <Typography variant='body1' sx={{ color: "#6B6B6B", fontWeight: "bolder", fontSize: "2.1rem", margin: "-45px 0 15px 99px" }}>How We Got CNCM here?</Typography>
            <Typography variant='body1' sx={{ color: "white", fontSize: ".9rem", margin: "0 0 0 99px", width: "75%" }}>CNCM's mission is to be the focal point for education and advocacy of copyright and neighboring rights, to provide a community for those working in this segment of industries.</Typography>
            <Typography variant='body1' sx={{ color: "white", fontSize: ".9rem", margin: "35px 0 0 99px", width: "75%" }}>Although the Rome Treaty has enabled neighbouring and related rights to be a source of income for performers living in any country that has been a signatory since 1961, this income stream has always played second fiddle to copyright owners (labels)</Typography>
          </Box>
          <Box sx={{ width: "25%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Box sx={{ width: "100%", height: "20%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexWrap: "wrap" }}>
              <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "2rem", height: "70%", width: "10%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", lineHeight: "45px" }}>16</Typography>
              <Typography sx={{ color: "white", fontSize: ".8rem", height: "60%", width: "60%", display: "flex", justifyContent: "flex-start", alignItems: "flex-end",marginLeft: "5px" }}>Individual</Typography>
              <Typography sx={{ color: "#1DEF55", height: "40%", width: "100%", marginTop: "-10px", fontSize: ".9rem", fontWeight: "bold" }}>LEGAL FIRM MEMBERS</Typography>
            </Box>
            <Box sx={{ width: "100%", height: "20%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexWrap: "wrap" }}>
              <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "2rem", height: "70%", width: "10%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", lineHeight: "45px" }}>5+</Typography>
              <Typography sx={{ color: "white", fontSize: ".8rem", height: "60%", width: "60%", display: "flex", justifyContent: "flex-start", alignItems: "flex-end",marginLeft: "5px" }}>Years</Typography>
              <Typography sx={{ color: "#1DEF55", height: "40%", width: "100%", marginTop: "-10px", fontSize: ".9rem", fontWeight: "bold" }}>ON THE INDUSTRY</Typography>
            </Box>
            <Box sx={{ width: "100%", height: "20%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexWrap: "wrap" }}>
              <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "2rem", height: "70%", width: "21%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", lineHeight: "45px" }}>100+</Typography>
              <Typography sx={{ color: "white", fontSize: ".8rem", height: "60%", width: "60%", display: "flex", justifyContent: "flex-start", alignItems: "flex-end",marginLeft: "5px" }}>Cases</Typography>
              <Typography sx={{ color: "#1DEF55", height: "40%", width: "100%", marginTop: "-10px", fontSize: ".9rem", fontWeight: "bold" }}>LEGAL CASES HANDLED SUCCESSFULLY</Typography>
            </Box>
          </Box>
      </Box>
    </Box>
  );
}

export default Cover;