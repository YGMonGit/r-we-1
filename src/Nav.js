import React, { useState, useEffect } from 'react';
import logo from './Assets/logo.png';
import { AppBar, Toolbar, Box, Button, Menu, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const itemList = ['OUR WORKS', 'SOLUTIONS', 'BECOME PARTNER', 'BLOG'];

function Nav() {
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

  let gaping = (windowWidth / 2 - 280) / 2;
  gaping = (gaping * 100) / windowWidth;

  return (
    <AppBar position="static" sx={{ height: "80px", bgcolor: "#FFF" }}>
      <Toolbar sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ height: "75%", display: "flex", alignItems: "center", marginLeft: { xs: "0px", md: "100px" }, marginRight: { xs: "0", md: `${gaping}%` }, flexGrow: { xs: "1", md: "0" } }}>
          <img src={logo} alt='hi' style={{ width: "150px", height: "90%" }} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {itemList.map((item, index) => (
            <Button key={index} sx={{ color: 'black' }}>
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ height: "75%", alignItems: "center" }} onClick={openMenu}>
            <MenuIcon sx={{ color: "#000", fontSize: '2rem' }} />
          </Box>
          <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
              {itemList.map((item, index) => (
                <MenuItem key={index}>{item}</MenuItem>
              ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;