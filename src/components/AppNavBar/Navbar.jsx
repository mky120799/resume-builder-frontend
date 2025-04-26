import React, { useState } from 'react' // from installed dependencies 
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import NavbarDesktop from './NavbarDesktop.jsx'; // from AppNavBar Components 
import NavbarMobile from './NavbarMobile.jsx';
import NavbarMobileDrawer from './NavbarMobileDrawer.jsx';
import { colors } from '../../utils/colors.js' // from utils 

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerToggle, setDrawerToggle] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerToggle(previousState => !previousState);
  }

  // custom styling of drawer 
  const drawerStyle = {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 240,
      backgroundColor: colors.gray950,
    },
  }

  return (
    <>
      {
        isMobile ? (
          <NavbarMobile handleDrawerToggle={handleDrawerToggle} />
        ) : (
          <NavbarDesktop />
        )
      }

      {/* this will be active when screen size is of mobile size  */}
      <Drawer
        variant="temporary"
        open={drawerToggle}
        onClose={handleDrawerToggle}
        sx={drawerStyle}
      >
        <NavbarMobileDrawer handleDrawerToggle={handleDrawerToggle} />
      </Drawer >
    </>
  )
}

export default Navbar

{/* <Drawer> will work when isMobile + NavbarMobile both are true*/ }