import React from 'react'
import Layout from "./../components/Layout";
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
const Contact = () => {
  return (
    <Layout>
      <Box>
        <Typography sx = {{textAlign: 'center'}}>
          <h1><u>Contact Us</u></h1><br/>
          <p>Thank you for your interest in The Food Hub! We value your feedback, inquiries, and reservations. Our team is here to assist you with any questions you may have. Please feel free to reach out to us through any of the following channels.</p><br/>
          <br/>
            <b>General Inquiries</b>
            <ul>
              <li><PhoneIcon fontSize='large' sx={{color: 'green', pt:2}}/>: +918287-217-237</li>
              <li><MailOutlineIcon fontSize='large' sx = {{color:'blue',pt:2}}/>: thefoodhub_inquiry@gmail.com</li>
              <br/>
            </ul>
            <b>Reservations</b>
            <ul>
              <li><PhoneIcon fontSize='large' sx={{color: 'green', pt:2}}/>: 080-9874-98924</li>
              <li><MailOutlineIcon fontSize='large' sx = {{color:'blue',pt:2}}/>: thefoodhub_reservation@gmail.com</li>
            </ul>
            <br/>
            <b>Private Events</b>
            <ul>
              <li><PhoneIcon fontSize='large' sx={{color: 'green', pt:2}}/>: +918373-039-928</li>
              <li><MailOutlineIcon fontSize='large' sx = {{color:'blue',pt:2}}/>: thefoodhub_privatevent@gmail.com</li>
            </ul>
          <br/>
          <b><LanguageIcon fontSize='small'/>&nbsp;&nbsp;Website</b>
          <p>Visit our official website to explore our menu, make reservations online, and learn more about upcoming events and special offers.</p>
          <p style={{color: 'blue', cursor: 'pointer'}}>thefoodhub.com</p><br/>
          <p>We are available during our regular business hours and will do our best to respond to your inquiries as promptly as possible. Whether you want to reserve a table, plan a private event, or simply have a question about our cuisine, we look forward to hearing from you.</p><br/>
          <p>Thank you for considering The Food Hub. We can't wait to welcome you and create an exceptional dining experience for you and your guests.</p><br/>
          <p>Bon Appetit!</p><br/>
          <b>The Food Hub Team</b><br/><br/>
        </Typography>
      </Box>
    </Layout>
  )
}

export default Contact
