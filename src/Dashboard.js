import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';

const image_1 = new URL('./Assets/img1.png', import.meta.url);

function Dashboard() {

  /* 
    The DB_Height useState and the useEffect below it is used for calculating the outer Box height. I did that because I want the height of the nav to always be 80px and and the dashBoard to have the rest of the visible height on the screen so that on any kind of screen I only see the navbar and the dashboard on the top visible screen
  */
  const [DB_Height, setDB_Height] = React.useState(window.innerHeight);
  React.useEffect(() => {
    const handleResize = () => { setDB_Height(window.innerHeight); };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);
  // I used the next two lines of code to calculate the amount of screen height left in percent and put it in variable size to make it the hight of the outer Box.
  let size = 8000 / DB_Height;
  size = 100 - size;
  // I used the next two lines of code to calculate the margin top for the first child of element based on the height of the screen (may be removed 'temporary').
  let margin_top = 0;
  DB_Height <= 600 ? margin_top = 0 : margin_top = 110; 

  return (
    <Box sx={{ backgroundImage: `url(${image_1})`, backgroundSize: "cover", backgroundPosition: "center", width:"100%", height: `${size}%`, minHeight: "360px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: "65%", height: "45%", marginTop: `${margin_top}px`, display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
        <Typography variant='subtitle2' sx={{ color: "#1DEF55", fontWeight: "bold"}}>WORKING TOGETHER FOR</Typography>
        <Typography variant='h1' sx={{ color: "white", fontWeight: "bold", fontSize: "3.3vw", display: "inline-block" }}>COPYRIGHT & NEIGHBORING RIGHTS</Typography>
        <Typography variant='body2' sx={{ width: "73%", color: "white", textAlign: "center", fontSize: {xs: '.7rem', sm: '.9rem', md: '1.1rem'}, fontWeight: "lighter", letterSpacing: "0.36px", marginTop: "10px" }}>
          We are a society standing for copyrights & Neighboring rights for the creative industry over all the country, striving to attain a well mannered society avoiding stilling minds.
        </Typography>
        <Box sx={{ width: "100%", display: "flex" , justifyContent: "center", alignItems: "flex-start", marginTop: "40px" }}>
          <Button variant="outlined" sx={{ borderRadius: "0", border: "1px solid #1DEF55", color: "black", backgroundColor: "#1DEF55", fontSize: {xs: '.6rem', sm: '1rem'} }}>VIEW MORE</Button>
          <Button variant="outlined" sx={{ marginLeft: "10px", borderRadius: "0", border: "1px solid #A1A1A1", color: "white", fontSize: {xs: '.6rem', sm: '1rem'} }}>CONTACT US</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard;