import React from 'react'
import { Snackbar, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { colors } from '../utils/colors.js'

// success modal 
// shown when user download resume 
function SuccessSnackbar({ open, onClose }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={onClose}
            message="Download Successfully"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            ContentProps={{
                style: {
                    width: '300px',
                    height: '100px',
                    backgroundColor: colors.blue700,
                    fontSize : '18px',
                },
            }}
            action={
                <>
                    <IconButton
                        size="large"
                        aria-label="close"
                        color="inherit"
                        onClick={onClose}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </>
            }
        />
    );
}

export default SuccessSnackbar