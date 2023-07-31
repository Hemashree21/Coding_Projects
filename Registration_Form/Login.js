import React, { useState } from 'react';
import {Box, Button, TextField, Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Auth = () => {
    const [isSignup,setisSignup] = useState(false);
    console.log(isSignup)
    const [inputs,setInputs] = useState({
      Name:'', Email:'', Password:'',
    });
    const handleChange = (e) => {
      setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const resetState = () => {
    setisSignup(!isSignup);
    setInputs({Name:'',Email:'',Password:''})
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box bgcolor={'lightcyan'} 
         display='flex' 
         flexDirection={'column'} 
         maxWidth={300} 
         alignItems={'center'} 
         justifyContent={'center'} 
         margin={'auto'} 
         marginTop={5} 
         padding={5} 
         borderRadius={10} 
         boxShadow={'5px 5px 5px #ccc'} 
         sx={{':hover': {boxShadow: '3px 3px 3px grey'}}} css={{'@media (max-width: 600px)' : {width: '90%', padding: 5,},}}>
            <Typography variant='h3' textAlign={'center'} padding={3} fontFamily={'fantasy'}><AccountCircleIcon fontSize='large'/>{isSignup ? ' Signup' : ' Login'}</Typography><br/>
            {isSignup && (<TextField name='Name' value={inputs.Name} onChange={handleChange} type={'text'} placeholder='Name' fullWidth />)}<br/>
            <TextField name='Email' value={inputs.Email} onChange={handleChange} type={'Email'} placeholder='Email' fullWidth/><br/>
            <TextField name='Password' value={inputs.Password} onChange={handleChange} type={'Password'} placeholder='Enter Password' fullWidth/><br/>
            <Button onClick={() => alert(isSignup ? 'Congratulations! Your account is created successfully!' : 'You have Logged in Successfully!')} type='submit' fullWidth variant='contained' sx={{color: 'white' , bgcolor: 'teal' , marginTop: 2, borderRadius: 1, ":hover": {bgcolor: 'darkgreen'}}}>{isSignup ? ' Signup' : ' Login'}&nbsp;&nbsp;{isSignup ? <PersonAddIcon/> : <LoginIcon/>}</Button>
            {isSignup || ( <>
            <br/>Need an account?<p>
                <Button onClick={resetState} sx={{width: 15 , color: 'darkblue'}}>Signup&nbsp;&nbsp;<PersonAddIcon/></Button></p></>)}
            {isSignup && (<>
            <br/>Already have an account?<p>
                <Button onClick={resetState} sx={{width: 15 , color: 'darkblue'}}>Login&nbsp;&nbsp;<LoginIcon/></Button></p></>)}   
        </Box>
        </form>
    </div>
  );
};

export default Auth;
