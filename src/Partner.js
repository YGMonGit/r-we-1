import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { PartnerInfo } from './data';

function Partner() {
  return (
    <Box sx={{ width:"100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "60px" }}>
      <Typography sx={{ color: "#333", fontWeight: "700", fontSize: {xs: '1.5rem', sm: "2rem"} }}>OUR PARTNERS</Typography>
      <Box sx={{ width:"100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: 'wrap', overflow: 'hidden', overflowY: 'scroll', '::-webkit-scrollbar': {width: '0'} }}>
        {PartnerInfo.map((item) => (
          <img src={`${item?.imageSrc}`} alt='hi' style={{ width: "100px", height: "100px", margin: "0px 0 0 0" }} />
        ))}
      </Box>
    </Box>
  );
}

export default Partner;