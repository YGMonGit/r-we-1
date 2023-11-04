import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { StandInfo } from './data';

function Stand(){
  return(
    <Box sx={{ width:"100%", height: "55%", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", margin: "20px 0 0 0" }}>
      <Box sx={{ height: "20%", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center", flexDirection: "column"}}>
        <Typography variant='h4' sx={{ color: "#333", fontWeight: "bolder", display: "inline-block" }}>WHAT WE STAND FOR</Typography>
        <Typography variant='subtitle2' sx={{ color: "#1DEF55", fontWeight: "bold", margin: "0 0 40px 0"}}>CNCM provides the community support, debate and foster the work of all members</Typography>
      </Box>
      <Box sx={{ width: "85%", flex: "1", display: "flex", alignItems: "flex-start", justifyContent: "space-evenly", margin: "25px 0 0 0" }}>
        {StandInfo.map((item) => (
          <Box sx={{ height: "85%", width: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }} key={item.id}>
            <img src={`${item?.imageSrc}`} alt='hi' style={{ width: "auto", height: "80px", margin: "5px 0 20px 0" }} />
            <Typography variant='body2' sx={{ fontWeight: "bold", color: "#333" }}>{item.title}</Typography>
            <Typography variant='caption' sx={{ width: "160px", height: "40px", color: "#555", fontWeight: "lighter", textAlign: "center", fontSize: ".5rem", margin: "10px 0 10px 0"}}>{item.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Stand;