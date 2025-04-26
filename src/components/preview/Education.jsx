import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'

// preview of education 
function Education() {
  const education = useSelector(state => state.education);
  const dynamicStyle = useSelector((state) => state.dynamicStyle);

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f3f4f6',
        color: '#111827',
        p: '1rem'
      }}>
        <Typography sx={{
          color: dynamicStyle.headingColor,
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>Education</Typography>
        <Divider sx={{ backgroundColor: dynamicStyle.dividerColor}} />
        {
          education?.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: '1rem',
                marginTop: '0.5rem'
              }}
            >
              <Typography
                sx={{
                  color: '#000000',
                  fontWeight: 'bold'
                }}
              >
                {item.degree} - {item.domain}
              </Typography>
              <Typography>{item.university}</Typography>
              <Typography>{item.start_year} - {item.end_year}</Typography>
            </Box>
          ))
        }
      </Box>
    </>
  )
}

export default Education