import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { StandInfo } from './data';

function Stand(){
  return(
    <Box sx={{ width:"100%", height: "400px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", margin: "20px 0 0 0" }}>
      <Box sx={{ height: "30%", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center", flexDirection: "column"}}>
        <Typography sx={{ fontSize: {xs: '1.2rem', sm: '2rem'}, color: "#333", fontWeight: "bolder" }}>WHAT WE STAND FOR</Typography>
        <Typography variant='subtitle2' sx={{ color: "#1DEF55", fontWeight: "bold", textAlign: 'center', margin: "0 0 40px 0", width: {xs: '80%', sm: '100%'}}}>CNCM provides the community support, debate and foster the work of all members</Typography>
      </Box>
      <Box sx={{ width: "85%", flex: "1", display: "flex", alignItems: "flex-start", justifyContent: "center", gap: '25px', margin: "25px 0 0 0", flexWrap: 'wrap', overflow: 'hidden', overflowY: 'scroll', '::-webkit-scrollbar': {width: '0'} }}>
        {StandInfo.map((item) => (
          <Box sx={{ height: "85%", width: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", flexGrow: '1' }} key={item.id}>
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