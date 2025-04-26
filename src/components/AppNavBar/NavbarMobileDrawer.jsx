import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Box, Stack } from '@mui/system'
import { Divider, Button, Typography } from '@mui/material'
import resume_builder from '../../assets/image.jpg'
import { colors } from '../../utils/colors.js'

// this mobile drawer will appear when navbarMobile is true 
function NavbarMobileDrawer({ handleDrawerToggle }) {
    const location = useLocation();
    const links = [
        { text: 'Home', route: '/' },
        { text: 'Fill Details', route: '/filldetails' },
        { text: 'My Resume', route: '/myresume' },
        { text: 'About', route: '/about' },
    ];

    return (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                textAlign: "center",
                backgroundColor: colors.gray950
            }}>
            <NavLink
                to={'/'}
                style={{
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                <img
                    src={resume_builder}
                    alt="logo"
                    height={40}
                    width={40}
                />
                <Typography
                    fontSize={'large'}
                    color={colors.amber500}
                >
                    Resume Builder
                </Typography>
            </NavLink>
            <Divider sx={{ backgroundColor: colors.amber500 }} />
            <Stack
                direction={'column'}
                spacing={2}
            >
                {
                    links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={`${link.route}`}
                        >
                            <Button
                                variant={location.pathname === `${link.route}` ? 'contained' : 'text'}
                                size='large'
                            >
                                {link.text}
                            </Button>
                        </NavLink>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default NavbarMobileDrawer