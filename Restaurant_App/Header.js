import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, Divider } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import "../styles/HeaderStyles.css";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textalign:'center'}}>
      <RestaurantIcon/>
      <Typography color={"goldenrod"} varient="h5" component="div" sx={{flexGrow:2}}>&nbsp;&nbsp;<b>THE FOOD HUB</b>
          </Typography><br/>
          <Divider/><br/>
            <ul className='mobile-navigation'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: 'black'}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr: 2, display:{sm: "none"},}} onClick={handleDrawerToggle}>
              <WidgetsIcon/>
            </IconButton>
            <RestaurantIcon/>
          <Typography color={"goldenrod"} varient="h6" component="div" sx={{flexGrow:1}}>&nbsp;&nbsp;<b>THE FOOD HUB</b>
          </Typography>
          <Box sx={{display: {xs:'none', sm:'block'}}}>
            <ul className='navigation-menu'>
              <li><NavLink activeClassName='active' to="/">Home</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer varient="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm: 'none'}, "& .MuiDrawer-paper": {boxSizing: 'border-box', width: '240px', textAlign: 'center', paddingTop: '25px'}}}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Header
