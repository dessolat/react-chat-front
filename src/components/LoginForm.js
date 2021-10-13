import React from 'react';
import { Box, TextField, Button, InputAdornment, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ForumIcon from '@mui/icons-material/Forum';
import LoginIcon from '@mui/icons-material/Login';
import useInput from '../hooks/useInput';
import useLogging from '../hooks/useLogging';

const LoginForm = () => {
  const [userName, handleUserChange] = useInput();
  const [channel, handleChannelChange] = useInput();
  const login = useLogging();

  const handleSubmit = e => {
    e.preventDefault();
    if (userName && channel) {
      localStorage.setItem('isLogged', true);
      login(true);
    }
  };

  return (
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ textAlign: 'center' }}>
      <Typography variant='h5' component='h3'>
        Login
      </Typography>
      <TextField
        margin='normal'
        required
        fullWidth
        name='username'
        label='Name'
        autoFocus
        value={userName}
        onChange={handleUserChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
      <TextField
        margin='normal'
        padding='normal'
        required
        fullWidth
        name='channel'
        label='Channel'
        type='text'
        value={channel}
        onChange={handleChannelChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <ForumIcon />
            </InputAdornment>
          )
        }}
      />
      <Button
        type='submit'
        startIcon={<LoginIcon />}
        disabled={!(userName && channel)}
        onSubmit={handleSubmit}
        variant='contained'
        sx={{ mt: 2 }}>
        Join
      </Button>
    </Box>
  );
};

export default LoginForm;
