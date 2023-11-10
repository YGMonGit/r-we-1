import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import { WorkInfo } from './data';
import MenuIcon from '@mui/icons-material/Menu';

const itemList = [ 'ALL', 'FILMS', 'MUSIC', 'AUTHORS', 'PERFORMANCE' ];

function Work() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWithReset = () => {
      if (window.innerWidth >= 900) {
        setAnchorEl(null);
      }
    };
  
    window.addEventListener('resize', handleResizeWithReset);
  
    return () => {
      window.removeEventListener('resize', handleResizeWithReset);
    };
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return(
    <Box sx={{ width:"100%", height: "490px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", margin: "20px 0 0 0" }}>
      <Box sx={{ height: "45%", minHeight: "105px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box sx={{ height: "100%", width: "auto", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
          <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.3rem', md: '1.5rem' }, color: "#333", fontWeight: "bold", margin: "0 0 0 20px"}}>OUR WORKS</Typography>
          <Typography sx={{fontSize: { xs: '.8rem' ,sm: '.6rem', md: '.8rem' }, color: "#1DEF55", fontWeight: "bold", margin: "-8px 0 0 20px" }}>Cases We Handled</Typography>
        </Box>
        <Box sx={{ height: "100%", width: "auto", display: {xs: 'none', sm: 'flex'}, justifyContent: "flex-start", alignItems: "center", margin: {sm: '0 20px 0 0', md: '0 100px 0 0'} }}>
          <Button variant="text" sx={{ color: "#000"}}>ALL</Button>
          <Button variant="contained" sx={{ color: "#000", backgroundColor: "#1DEF55"}}>FILMS</Button>
          <Button variant="text" sx={{ color: "#000"}}>MUSIC</Button>
          <Button variant="text" sx={{ color: "#000"}}>AUTHORS</Button>
          <Button variant="text" sx={{ color: "#000"}}>PERFORMANCE</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, height: '100%', justifyContent: "flex-start", alignItems: "center", margin: "0 20px 0 0" }}>
          <Box onClick={openMenu}>
            <MenuIcon sx={{ color: "#000", fontSize: '2rem' }} />
          </Box>
          <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
              {itemList.map((item, index) => (
                <MenuItem key={index}>{item}</MenuItem>
              ))}
          </Menu>
        </Box>
      </Box>
      <Box sx={{ width: "90%", flex: "1", minHeight: '200px', display: "flex", alignItems: "flex-start", justifyContent: "center", gap: '50px', flexWrap: 'wrap', overflow: 'hidden', overflowY: 'scroll', '::-webkit-scrollbar': {width: '0'} }}>
        {WorkInfo.map((item) => (
          <Box sx={{ height: "100%", width: "180px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }} key={item.id}>
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