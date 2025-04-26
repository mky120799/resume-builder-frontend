import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'

// preview of skills 
function KeySkills() {
  const keySkills = useSelector((state) => state.keySkills);
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
        }}>Key Skills</Typography>
        <Divider sx={{ backgroundColor: dynamicStyle.dividerColor }} />
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginTop: '0.5rem'
        }}>
          {
            keySkills.map((skill, index) => (
              <Typography
                sx={{ marginRight: '1rem' }}
                key={index}
              >
                {skill}
              </Typography>
            ))
          }
        </Box>
      </Box>
    </>
  )
}

export default KeySkills