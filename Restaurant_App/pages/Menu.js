import React from 'react'
import Layout from "./../components/Layout";
import {MenuList} from '../data/data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
const Menu = () => {
  return (
    <Layout>
    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent: 'center'}}>
      {MenuList.map(menu => (
        <Card sx={{maxWidth:'460px',display: 'flex', m:2.5}}>
          <CardActionArea>
            <CardMedia sx={{minHeight: '460px'}} component={'img'} src={menu.image} alt={menu.name}/>
            <CardContent>
              <Typography variant="h4" gutterBottom={'div'}>
                {menu.name}
              </Typography>
              <Typography variant="h6">
                {menu.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </Layout>
  )
}

export default Menu
