import * as React from 'react';
import logo from './Assets/logo.png';
import { AppBar, Toolbar, Box, Button, Menu, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

let itemList = ['OUR WORKS', 'SOLUTIONS', 'BECOME PARTNER', 'BLOG'];

function NavTemp() {
  const [ windowsWidth, setWindowsWidth ] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => { setWindowsWidth(window.innerWidth); };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);
  
  const [ anchorNav, setAnchorNav ] = React.useState(window.innerWidth);
  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  }

  return(
    <AppBar position='static' sx={{ height: "80px", bgcolor: "#FFF"}}>
      <Toolbar sx={{ height: "100%"}}>
        <Box sx={{ height: "75%", display:"flex", alignItems: "center", marginLeft: {xs:"0px", md: "100px"}, marginRight: {xs: "0", md: `${(windowsWidth/2 - 280)/2}px`}, flexGrow: {xs: "1", md: "0"} }}>
          <img src={logo} alt='hi' style={{ width: "150px", height: "90%" }}/>
        </Box>
        <Box sx={{ display: {xs: 'none', md: 'block'} }}>
          { itemList.map((item) => (
            <Button sx={{ color: 'black' }}>{item}</Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ height: "75%", alignItems: "center", }} onClick={openMenu}>
            <MenuIcon sx={{ color: "#000", fontSize: '2rem'}} />
          </Box>
          {/* <Menu open={Boolean(anchorNav)}>
              <MenuList>
                { itemList.map((item) => (
                  <MenuItem>{item}</MenuItem>
                ))}
              </MenuList>
          </Menu> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavTemp;