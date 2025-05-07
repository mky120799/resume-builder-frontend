import React, { useState } from 'react';
import { Button, Input, Box } from '@mui/material';
import resume_builder from '../../assets/image.jpg'
import { colors } from '../../utils/colors';

// UploadImage components to upload image 
const UploadImage = () => {

    const [image, setImage] = useState(null);
    const storedImage = localStorage.getItem('uploadedImage');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
   

    const handleUpload = () => {
        localStorage.setItem('uploadedImage', URL.createObjectURL(image));
    };

    const isValidImage = (url) => {
        const img = new Image(); // inbuilt Image() constructor in javascript 
        img.src = url;
        return img.complete && img.naturalWidth !== 0;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                p: '0.5rem',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                alignItems: {
                    xs: 'flex-start',
                    md: 'center'
                }
            }}
        >
            <Box>
                <label
                    htmlFor="image-upload"
                >
                    <Button
                        variant="contained"
                        component="span"
                    >
                        Upload or Change Image
                    </Button>
                </label>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    sx={{ display: 'none' }}
                    id="image-upload"
                />
            </Box>

            {
                image ? (
                    <img
                        src={URL.createObjectURL(image)}
                        alt="img"
                        width={100}
                        height={100}
                        style={{
                            border: '1px solid',
                            borderColor: colors.cyan600,
                            borderRadius: '50%'
                        }}
                    />
                ) : (

                    <img
                        src={isValidImage(storedImage) ? storedImage : resume_builder}
                        alt="img"
                        width={100}
                        height={100}
                        style={{
                            border: '1px solid',
                            borderColor: colors.cyan600,
                            borderRadius: '50%'
                        }}
                    />

                )
            }

            <Button
                variant="contained"
                onClick={handleUpload}
            > Save Image
            </Button>
        </Box >
    );
};

export default UploadImage;
