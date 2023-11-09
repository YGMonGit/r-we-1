import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { PartnerInfo } from './data';

function Partner() {
  return (
    <Box sx={{ width:"100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "60px" }}>
      <Typography sx={{ color: "#333", fontWeight: "700", fontSize: "2rem" }}>OUR PARTNERS</Typography>
      <Box sx={{ width:"100%", height: "30%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        {PartnerInfo.map((item) => (
          <img src={`${item?.imageSrc}`} alt='hi' style={{ width: "100px", height: "100px", margin: "0px 0 0 0" }} />
        ))}
      </Box>
    </Box>
  );
}

export default Partner;