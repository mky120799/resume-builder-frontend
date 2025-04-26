import React from 'react' // from installed dependencies 
import { useSelector } from 'react-redux'
import { useTheme, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system';
import Bio from '../components/input/Bio' // from input folder 
import Address from '../components/input/Address'
import Experience from '../components/input/Experience'
import Projects from '../components/input/Projects'
import Education from '../components/input/Education'
import KeySkills from '../components/input/KeySkills'
import ViewPreview from '../components/preview/ViewPreview'; // from preview folder 
import FillDetailButton from '../components/FillDetailButton'; // from components folder 
import FillDetailSideBar from '../components/FillDetailSideBar';

// page to fill details 
function FillDetails() {

  // use of material ui to find the screen size 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  // value comming from redux store 
  const fillDetails = useSelector(state => state.fillDetails);
  const value = fillDetails.value

  // redering of components based on value coming from redux store 
  const renderComponent = () => {
    switch (value) {
      case 1: return <Bio />;
      case 2: return <Address />;
      case 3: return <Experience />;
      case 4: return <Projects />;
      case 5: return <Education />;
      case 6: return <KeySkills />;
      case 7: return <ViewPreview />;
      default: return null;
    }
  };

  // inline styling of box wrapper  
  const boxWrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    '& > :first-of-type': {
      width: isMobile ? '8%' : isMediumScreen ? '10%' : isLargeScreen ? '10%' : 'auto',
    },
    '& > :last-of-type': {
      width: isMobile ? '85%' : isMediumScreen ? '80%' : isLargeScreen ? '90%' : '80%',
    },
  }

  return (
    <Box sx={boxWrapper}>
      {isMobile ? <></> : <FillDetailButton />}
      <Box>{renderComponent()}</Box>
    </Box>
  )
}

export default FillDetails

// edited the line - 57
// do not remove this comments 
// {isMobile ? <FillDetailSideBar /> : <FillDetailButton />}
