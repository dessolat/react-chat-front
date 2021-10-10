import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Box, TextField, Button, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ForumIcon from '@mui/icons-material/Forum';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [channel, setChannel] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 250,
        padding: 3
      }}>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <TextField
          required
          fullWidth
          name='username'
					label='Name'
          autoFocus
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
					InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <ForumIcon />
              </InputAdornment>
            )
          }}
        />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3 }}>
          Join to chat
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
