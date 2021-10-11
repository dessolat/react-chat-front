import React, { useState } from 'react';
import { Box, TextField, Button, InputAdornment, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ForumIcon from '@mui/icons-material/Forum';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [channel, setChannel] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{textAlign: 'center'}}>
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
        onChange={e => setUserName(e.target.value)}
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
        onChange={e => setChannel(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <ForumIcon />
            </InputAdornment>
          )
        }}
      />
      <Button type='submit' onSubmit={handleSubmit}  variant='contained' sx={{ mt: 2 }}>
        Join to chat
      </Button>
    </Box>
  );
};

export default LoginForm;
