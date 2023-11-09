import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { WorkInfo } from './data';

function Work() {
  return(
    <Box sx={{ width:"100%", height: "490px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", margin: "20px 0 0 0" }}>
      <Box sx={{ height: "45%", minHeight: "105px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box sx={{ height: "100%", width: "auto", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
          <Typography sx={{fontSize: "1.5rem", color: "#333", fontWeight: "bold", margin: "0 0 0 20px"}}>OUR WORKS</Typography>
          <Typography sx={{fontSize: ".8rem", color: "#1DEF55", fontWeight: "bold", margin: "-8px 0 0 20px" }}>Cases We Handled</Typography>
        </Box>
        <Box sx={{ height: "100%", width: "auto", display: "flex", justifyContent: "flex-start", alignItems: "center", margin: "0 100px 0 0" }}>
          <Button variant="text" sx={{ color: "#000"}}>ALL</Button>
          <Button variant="contained" sx={{ color: "#000", backgroundColor: "#1DEF55"}}>FILMS</Button>
          <Button variant="text" sx={{ color: "#000"}}>MUSIC</Button>
          <Button variant="text" sx={{ color: "#000"}}>AUTHORS</Button>
          <Button variant="text" sx={{ color: "#000"}}>PERFORMANCE</Button>
        </Box>
      </Box>
      <Box sx={{ width: "100%", flex: "1", display: "flex", alignItems: "flex-start", justifyContent: "space-evenly"}}>
        {WorkInfo.map((item) => (
          <Box sx={{ height: "85%", width: "180px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }} key={item.id}>
            <img src={`${item?.imageSrc}`} alt='hi' style={{ width: "100%", height: "100px", margin: "5px 0 20px 0" }} />
            <Typography sx={{ color: "#000", fontSize: ".7rem", display: "flex", justifyContent: "center", alignItems: "flex-start", fontWeight: "bold" }}>{item.movieName}</Typography>
            <Typography sx={{ color: "#333", fontSize: ".7rem", display: "flex", justifyContent: "center", alignItems: "flex-start", margin: "-5px 0 35px 0", fontStyle: "italic" }}>Keeping copyright & Royalty</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ width: "100%", height: "40%", minHeight: "73px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        <Button variant="contained" sx={{ color: "#000", fontSize: ".7rem", fontWeight: "bold", backgroundColor: "#1DEF55"}}>VIEW MORE PROJECTS</Button>
      </Box>
    </Box>
  );
}

export default Work;