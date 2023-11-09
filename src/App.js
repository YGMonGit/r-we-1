import * as React from 'react';
import Nav from "./Nav";
import Dashboard from './Dashboard';
import Blog from './Blog';
import Cover from './Cover';
import Work from './Work';
import Stand from './Stand';
import Solution from './Solution';
import Partner from './Partner';
import Build from './Build';
import Check from './Check';
import Footer from './Footer';

import { Box } from '@mui/material';

import NavTemp from './NavTemp';

function App() {
  return (
    <Box sx={{ backgroundColor: "white", height:"100vh", overflow: "hidden", overflowY: "scroll", '::-webkit-scrollbar': {width: '0',} }}>
      <NavTemp />
      {/* <Nav /> */}
      <Dashboard />
      <Blog />
      <Cover />
      <Work />
      <Stand />
      <Solution />
      <Partner />
      <Build />
      <Check />
      <Footer />
    </Box>
  );
}

export default App;
