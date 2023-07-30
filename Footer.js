import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p:2}}>
        <Box sx={{m:0.5, "& svg": {fontSize: "35px", cursor: "pointer",mr: 2,},"& svg:hover": {color: 'red', transform: 'translateX(5px)', transition: 'all 400ms',},}}>
            <InstagramIcon/>&nbsp;<TwitterIcon/>&nbsp;<YouTubeIcon/>&nbsp;<EmailIcon/>&nbsp;<TelegramIcon/>
        </Box>
        <Typography varient='h5' sx={{'@media (max-width:600px)': {fontSize: '1rem',},}}>
            All Rights Reserved &copy; 
        </Typography>
    </Box>
    </>
  )
}

export default Footer
