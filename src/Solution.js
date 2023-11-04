import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { SolutionInfo } from './data';

function Solution() {
  return(
    <Box sx={{ width:"100%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center", gap: "60px", margin: "20px 0 0 0", backgroundColor: "#111111" }}>
      <Box sx={{ width: "auto", height: "40%", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
        <Typography variant='h4' sx={{ color: "#1DEF55", fontWeight: "bolder" }}>Solutions & Packages</Typography>
        <Typography variant='caption' sx={{ width: "280px", color: "white", fontSize: ".95rem", margin: "10px 0 0 0" }}>CNCM provides the community support, debate and foster the work of all members</Typography>
      </Box>
      {SolutionInfo.map((item) => (
        <Box sx={{ width: "18%", height: "80%", backgroundColor: "#FFF", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", borderRadius: "10px" }} key={item.id}>
          <Typography sx={{ color: "#1DEF55", fontWeight: "750", fontSize: ".9rem", margin: "35px 0 -5px 0"}}>{item.title}</Typography>
          <Typography variant='body2' sx={{ fontWeight: "bold", color: "#333" }}>{item.mainTitle}</Typography>
          <Typography variant='caption' sx={{ color: "#333", fontWeight: "lighter", fontStyle: "italic", fontSize: ".7rem", margin: "-5px 0 35px 0"}}>{item.subtitle}</Typography>
          <Typography sx={{ color: "#555", fontSize: ".7rem", textAlign: "center",width: "75%", margin: "0 0 0 0" }}>{item.content}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Solution;