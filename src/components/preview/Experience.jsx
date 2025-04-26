import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'

// preview of experience 
function Experience() {
  const experience = useSelector(state => state.experience);
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
          color : dynamicStyle.headingColor,
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>Experience</Typography>
        <Divider sx={{ backgroundColor: dynamicStyle.dividerColor }} />
        {
          experience.map((item, index) => {
            return (
              <Box key={index} sx={{
                display: 'flex',
                gap: '1rem',
                marginTop: '0.5rem'
              }}>
                <Typography sx={{
                  color: '#000000',
                  fontWeight: 'bold'
                }}>{item.job_title} </Typography>
                <Typography> {item.organization_name} </Typography>
                <Typography>{item.start_year} - {item.end_year}</Typography>
              </Box>
            )
          })
        }
      </Box>
    </>
  )
}

export default Experience;