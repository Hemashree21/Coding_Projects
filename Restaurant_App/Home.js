import React from 'react';
import Layout from "./../components/Layout";
import { Link } from '@mui/material';
import Bg from '../images/bg.jpg';
import '../styles/HomeStyles.css';
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${Bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
        <div className='headerContainer'>
          <h2>Hungry? Let Us Deliver!</h2><br/><br/>
          <p><h3><i>Delight Your Taste Buds with India's Best Cuisine</i></h3></p><br/>
            <button><b><a href='/menu'>ORDER NOW</a></b></button>
        </div>
      </div>
    </Layout>
  );
};

export default Home
