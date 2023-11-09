import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Slide, Box } from '@mui/material';
import { BlogInfo } from './data';
import { MdFavorite } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const SlideDots = ({ count, currentIndex, onClick }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
      {Array.from({ length: count }).map((_, index) => (
        <FiberManualRecordIcon
          key={index}
          style={{ color: index === currentIndex ? '#1DEF55' : '#000000', cursor: 'pointer', margin: '0 2px', fontSize: '.7rem' }}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

const Slidess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BlogInfo.length);
  };

  const showSlider = window.innerWidth <= 900;
  const cardGap = window.innerWidth <= 1000 ? '10px' : '30px';

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ overflow: 'hidden', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {showSlider ? (
        <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', height: '300px', width: '100%' }}>
          {BlogInfo.map((card, index) => (
            <Slide
              key={index}
              direction={index === currentIndex ? 'left' : 'right'}
              in={index === currentIndex}
              mountOnEnter
              unmountOnExit
            >
              <Card key={index} style={{ width: '300px', minWidth: '290px' }}>
                <CardContent
                  sx={{
                    backgroundImage: `url(${card.imageSrc})`,
                    backgroundSize: 'cover',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    margin: '0',
                    padding: '0',
                  }}
                >
                  <Box sx={{ width: '65%', height: '50px', marginLeft: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle2" sx={{ color: '#CCC' }}>
                      Mahider Assefa
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#CCC' }}>
                      Nov 20
                    </Typography>
                  </Box>
                  <Box sx={{ width: '85%', height: '60px', margin: '0 0 0 20px' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                      How to Find Bid Tendering to Grow Your Business?
                    </Typography>
                  </Box>
                  <Box sx={{ width: '85%', height: '60px', margin: '30px 0 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#DDD' }}>
                      <MdFavorite style={{ width: '20px', height: '20px' }} />
                      3.8k
                    </Typography>
                    <Box sx={{ backgroundColor: '#333', height: '35px', width: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px' }}>
                      <HiDotsHorizontal style={{ color: 'white' }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', height: '70%', width: '90%', gap: `${cardGap}` }}>
          {BlogInfo.map((card, index) => (
            <Card key={index} style={{ width: '300px', minWidth: '290px' }}>
              <CardContent
                sx={{
                  backgroundImage: `url(${card.imageSrc})`,
                  backgroundSize: 'cover',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  margin: '0',
                  padding: '0',
                }}
              >
                <Box sx={{ width: '65%', height: '50px', marginLeft: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle2" sx={{ color: '#CCC' }}>
                    Mahider Assefa
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#CCC' }}>
                    Nov 20
                  </Typography>
                </Box>
                <Box sx={{ width: '85%', height: '60px', margin: '0 0 0 20px' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                    How to Find Bid Tendering to Grow Your Business?
                  </Typography>
                </Box>
                <Box sx={{ width: '85%', height: '60px', margin: '30px 0 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#DDD' }}>
                    <MdFavorite style={{ width: '20px', height: '20px' }} />
                    3.8k
                  </Typography>
                  <Box sx={{ backgroundColor: '#333', height: '35px', width: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px' }}>
                    <HiDotsHorizontal style={{ color: 'white' }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      { showSlider? <SlideDots count={BlogInfo.length} currentIndex={currentIndex} onClick={handleDotClick} />: null }
    </div>
  );
};

export default Slidess;