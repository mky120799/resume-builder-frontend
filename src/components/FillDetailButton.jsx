// from installed dependencies 
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, ButtonGroup } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import StarsIcon from '@mui/icons-material/Stars';
import DownloadIcon from '@mui/icons-material/Download';
import { switchComponents } from '../redux/slices/sliceFillDetails.js'; // from redux 
import { colors } from '../utils/colors.js' // from utils folder 
import { scrollToTop } from '../utils/controls.js';

// this components will render on all device size except lower than mobile size (sm)
function FillDetailButton() {
    const dispatch = useDispatch();
    const fillDetails = useSelector(state => state.fillDetails);
    const value = fillDetails.value

    const handleButtonClick = (index) => {
        dispatch(switchComponents(index + 1));
        scrollToTop()
    }

    // const buttons = [
    //     'Bio',
    //     'Address',
    //     'Experience',
    //     'Projects',
    //     'Education',
    //     'Key Skills',
    //     'Download'
    // ];

    const buttons = [
        { name: 'Bio', icon: <AccountCircleIcon /> },
        { name: 'Address', icon: <ContactMailIcon /> },
        { name: 'Experience', icon: <WorkHistoryIcon /> },
        { name: 'Projects', icon: <LibraryBooksIcon /> },
        { name: 'Education', icon: <SchoolIcon /> },
        { name: 'Key Skills', icon: <StarsIcon /> },
        { name: 'Download', icon: <DownloadIcon /> }
    ];

    return (
        <>
            <Box
                sx={{
                    marginTop: '3rem',
                    marginLeft: '3rem',
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                    sx={{
                        position: "sticky",
                        top: 90,
                        bgcolor: colors.gray950,
                        alignItems : 'start'
                        
                    }}
                >
                    {
                        buttons.map((button, index) => (
                            <Button
                                key={index}
                                onClick={() => handleButtonClick(index)}
                                variant={value === index + 1 ? 'contained' : 'outlined'}
                                size='large'
                                sx={{
                                    display : 'flex',
                                    justifyContent : 'flex-start',
                                    alignItems : 'center',
                                    width : '100%',
                                    gap : '1rem'
                                }}
                            >
                                {button.icon} {button.name}
                            </Button>
                        ))
                    }
                </ButtonGroup>
            </Box>
        </>
    )
}

export default FillDetailButton