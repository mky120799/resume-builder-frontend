import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { colors } from '../../utils/colors';
import NavbarMenu from './NavbarMenu';
import { Box } from '@mui/system';

// this is navbar of mobile size devices 
function NavbarMobile({ handleDrawerToggle }) {
    return (
        <AppBar
            sx={{
                position: "sticky",
                top: 0,
                bgcolor: "#000000",
                zIndex: '10',
                p: '0.5rem'
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center'

                }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                            color: colors.cyan600,
                            '&:hover': {
                                color: colors.cyan500,
                            },
                        }}
                        onClick={() => handleDrawerToggle()}
                    >
                        < MenuIcon
                            fontSize='large'
                        />
                    </IconButton>
                    <NavLink
                        to={'/'}
                        style={{
                            textDecoration: 'none',
                            color: colors.amber500,
                            fontSize: 'large',
                        }}
                    >
                        Resume Builder
                    </NavLink>

                </Toolbar>
                <NavbarMenu />
            </Box>

        </AppBar >
    )
}

export default NavbarMobile