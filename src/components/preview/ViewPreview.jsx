import React, { useState } from 'react'  // from installed dependencies 
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Paper, TextField, useTheme, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import jsPDF from 'jspdf'
import Address from './Address.jsx' // previewComponents folder 
import Bio from './Bio.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import KeySkills from './KeySkills.jsx'
import Projects from './Projects.jsx'
import SuccessSnackbar from '../SuccessSnackbar.jsx' // components 
import { firstComponents } from '../../redux/slices/sliceFillDetails.js' // redux 
import { colors } from '../../utils/colors.js' //  utils folder 
import { scrollToTop } from '../../utils/controls.js'


// this ViewPreview componets is preview of all single previewComponents 
function ViewPreview() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dynamicStyle = useSelector(state => state.dynamicStyle);
    const [isHovered, setIsHovered] = useState(false);
    const [dynamicWidth, setDynamicWidth] = useState('auto');
    const [pdfName, setPdfName] = useState('resume');
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [dynamicFlexDirection, setDynamicFlexDirection] = useState('column')

    const backToEdit = () => {
        navigate('/fillDetails');
        dispatch(firstComponents())
        scrollToTop();
    }

    const orignalWidth = () => {
        setDynamicWidth(dynamicWidth === '600px' ? 'auto' : 'auto');
        setDynamicFlexDirection('column');
    }

    const generatePDF = () => {
        setDynamicWidth(dynamicWidth === 'auto' ? '600px' : 'auto');
        setDynamicFlexDirection('row');
        const startTimeStamp = performance.now();
        const newPdf = new jsPDF('portrait', 'pt', 'a4');
        const bgColor = '#f3f4f6';
        newPdf.setFillColor(bgColor);
        newPdf.rect(
            0,
            0,
            newPdf.internal.pageSize.getWidth(),
            newPdf.internal.pageSize.getHeight(),
            'F'
        );
        newPdf.html(document.querySelector('#resume')).then(() => {
            newPdf.save(`${pdfName}.pdf`);
            setShowSnackbar(true);
        });
        const endTimeStamp = performance.now();
        const timeDifference = endTimeStamp - startTimeStamp;
        setTimeout(orignalWidth, timeDifference + 3000);
    }

    return (
        <Box
            sx={{
                backgroundColor: colors.gray900,
                color: colors.gray200,
                padding: '1rem'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    marginTop: '0.75rem',
                    marginBottom: '1rem'
                }}
            >
                <Box
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                        minWidth: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative',

                    }}
                >
                    <Paper
                        elevation={3}
                        id='resume'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#f3f4f6',
                            color: 'black',
                            width: {
                                xs: dynamicWidth,
                                sm: '600px',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: dynamicStyle.backgroundColor,
                                color: dynamicStyle.color,
                                display: 'flex',
                                flexDirection: dynamicFlexDirection,
                                alignItems: dynamicFlexDirection === 'column' ? 'start' : 'center',
                            }}
                        >
                            <Bio />
                            <Address />
                        </Box>
                        <Experience />
                        <Projects />
                        <Education />
                        <KeySkills />
                    </Paper>
                    {
                        isHovered && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: `rgba(0, 0, 0, 0.5)`,
                                }}
                            >
                                <Button
                                    sx={{
                                        backgroundColor: colors.gray950,
                                        color: colors.cyan600,
                                        width: '30%',
                                        fontWeight: 'bolder',
                                        '&:hover': {
                                            backgroundColor: colors.gray950,
                                        }
                                    }}
                                    onClick={() => backToEdit()}
                                >
                                    Back To Edit
                                </Button>
                                <Button
                                    sx={{
                                        backgroundColor: colors.gray950,
                                        color: colors.gray200,
                                        width: '30%',
                                        fontWeight: 'bolder',
                                        '&:hover': {
                                            backgroundColor: colors.gray950,
                                        }
                                    }}
                                    onClick={() => generatePDF()}
                                >
                                    Download PDF
                                </Button>
                            </Box>
                        )
                    }
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        width: '100%',
                        maxWidth: '600px'
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Pdf name"
                        variant="outlined"
                        size='small'
                        onChange={(e) => setPdfName(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            '& .MuiInputBase-root': {
                                color: colors.gray200,
                                backgroundColor: colors.gray950,
                            },
                            '& .MuiInputLabel-root': {
                                color: colors.cyan500,
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: colors.cyan500,
                                },
                                '&:hover fieldset': {
                                    borderColor: colors.cyan600,
                                },
                            },
                        }}
                    />
                    <Button
                        size='large'
                        sx={{
                            backgroundColor: colors.gray950,
                            color: colors.gray200,
                            width: '40%',
                            fontWeight: 'bolder',
                            border: '1px solid',
                            borderColor: colors.cyan600,
                            '&:hover': {
                                borderColor: colors.cyan500
                            }
                        }}
                        onClick={() => generatePDF()}
                    >
                        Export PDF
                    </Button>
                </Box>
            </Box>
            <SuccessSnackbar open={showSnackbar} onClose={() => setShowSnackbar(false)} />
        </Box >
    )
}

export default ViewPreview