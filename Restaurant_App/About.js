import React from 'react';
import Layout from "./../components/Layout";
import {Box, Typography} from '@mui/material';
const About = () => {
  return (
    <Layout>
      <Box sx={{my:5, textAlign: 'center','& h2': {textAlign: 'center',},'@media (max-width:600px)':{mt:0}}}>
        <Typography><h1>WELCOME TO THE FOOD HUB!</h1><br/>
      </Typography><br/>
      <p>
        <h2><u>About Us</u></h2><br/>
        <p>We believe that dining is not just about the food, but also about the experience. Our restaurant was founded with a passion for culinary excellence and a commitment to creating unforgettable moments for our guests. Whether you're joining us for a casual lunch, a special celebration, or an intimate dinner, we strive to make every visit a delightful and memorable one.</p>
        <br/><h2><u>Our Cuisine</u></h2><br/>
        <p>We take pride in offering a diverse and enticing menu inspired by a fusion of international flavors and locally-sourced ingredients. Each dish is crafted with creativity and passion, aiming to delight your taste buds and ignite your senses. From mouthwatering appetizers to delectable main courses, and indulgent desserts, our menu reflects our commitment to providing an extraordinary dining experience.</p>
        <br/><h2><u>Our Team</u></h2><br/>
        <p>Our dedicated team is the heart and soul of The Food Hub. From the kitchen to the dining area, every member of our staff plays a crucial role in ensuring that you have a seamless and enjoyable time with us. With attention to detail and a warm, friendly demeanor, our team is here to cater to your every need and make your visit truly special.</p>      
        <br/><h2><u>Community and Sustainability</u></h2><br/>
        <p>We believe in giving back to the community that has embraced us so warmly. The Food Hub actively supports local farmers and producers, sourcing fresh and sustainable ingredients to create our dishes. Our commitment to environmental responsibility extends to our eco-friendly practices, striving to minimize our ecological footprint and contribute to a greener, healthier planet.</p>     
        <br/><h2><u>Visit Us</u></h2><br/>
        <p>We invite you to join us at The Food Hub and be part of our culinary journey. Whether it's a family gathering, or a night out with friends, our doors are always open to welcome you with warmth, delectable food, and a memorable experience.</p>
        <br/>Thank you for being a part of our story.<br/><br/>Sincerely,<br/><br/><b>The Food Hub Team</b>
      </p>
      </Box>
    </Layout>
  )
}

export default About
