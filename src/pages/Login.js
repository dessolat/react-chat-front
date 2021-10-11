import React from 'react';
import { Paper } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 250,
        padding: 2,
				borderRadius: 3, '& .MuiOutlinedInput-root, .MuiButton-root': { borderRadius: 3 }
      }}>
      <LoginForm />
    </Paper>
  );
};

export default Login;
