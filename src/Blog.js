import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import { MdFavorite } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';

import './App.css';

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  if( screenWidth <= 600 ){
    settings.slidesToShow = 1;
  }
  else {
    settings.slidesToShow = 3;
  }


  return (
    <Box sx={{ backgroundColor: "#F5F5F5", width:"100%", height: "86%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Typography variant='h4' sx={{ color: "#333", fontWeight: "bold", display: "inline-block" }}>Blogs</Typography>
      <Typography variant='subtitle2' sx={{ color: "#1DEF55", fontWeight: "bold", margin: "0 0 40px 0"}}>Read latest blogs and news</Typography>
      <div className='blog-parent'>
        <Slider {...settings}>
            <div className='blog-container'>
              <div className="card card1">
                <Box sx={{ width: "65%", height: "50px", marginLeft: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant='subtitle2' sx={{ color: "#CCC"}}>Mahider Assefa</Typography>
                  <Typography variant='subtitle2' sx={{ color: "#CCC"}}>Nov 20</Typography>
                </Box>
                <Box sx={{ width: "85%", height: "60px", margin: "0 0 0 20px" }}>
                  <Typography variant='subtitle1' sx={{fontWeight: "bold"}}>How to Find Bid Tendering to Grow Your Business?</Typography>
                </Box>
                <Box sx={{ width: "85%", height: "60px", margin: "30px 0 20px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <Typography sx={{display: "flex", justifyContent: "center", alignItems: "center", color: "#DDD"}}><MdFavorite style={{width: "20px", height: "20px"}}/>3.8k</Typography>
                  <Box sx={{ backgroundColor: "#333", height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50px" }}>
                    <HiDotsHorizontal/>
                  </Box>
                </Box>
              </div>
              <div className='shade'></div>
            </div>
            <div className='blog-container'>
              <div className="card card2">
                <Box sx={{ width: "65%", height: "50px", marginLeft: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant='subtitle2' sx={{ color: "#CCC"}}>Mahider Assefa</Typography>
                  <Typography variant='subtitle2' sx={{ color: "#CCC"}}>Nov 20</Typography>
                </Box>
                <Box sx={{ width: "85%", height: "60px", margin: "0 0 0 20px" }}>
                  <Typography variant='subtitle1' sx={{fontWeight: "bold"}}>How to Find Bid Tendering to Grow Your Business?</Typography>
                </Box>
                <Box sx={{ width: "85%", height: "60px", margin: "30px 0 20px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <Typography sx={{display: "flex", justifyContent: "center", alignItems: "center", color: "#DDD"}}><MdFavorite style={{width: "20px", height: "20px"}}/>3.8k</Typography>
                  <Box sx={{ backgroundColor: "#333", height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50px" }}>
                    <HiDotsHorizontal/>
                  </Box>
                </Box>
              </div>
              <div className='shade'></div>
            </div>
            <div className='blog-container'>
              <div className="card card3">
                <Box sx={{ width: "65%", height: "50px", marginLeft: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant='subtitle2' sx={{ color: "#CCC"}}>Mahider Assefa</Typography>
                  <Typography variant='subtitle2' sx={{ color: "#CCC"}}>Nov 20</Typography>
                </Box>
                <Box sx={{ width: "85%", height: "60px", margin: "0 0 0 20px" }}>
                  <Typography variant='subtitle1' sx={{fontWeight: "bold"}}>How to Find Bid Tendering to Grow Your Business?</Typography>
                </Box>
                <Box sx={{ width: "85%", height: "60px", margin: "30px 0 20px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <Typography sx={{display: "flex", justifyContent: "center", alignItems: "center", color: "#DDD"}}><MdFavorite style={{width: "20px", height: "20px"}}/>3.8k</Typography>
                  <Box sx={{ backgroundColor: "#333", height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50px" }}>
                    <HiDotsHorizontal/>
                  </Box>
                </Box>
              </div>
              <div className='shade'></div>
            </div>
        </Slider>
      </div>
    </Box>
  );
};

export default Blog;
