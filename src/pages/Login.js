import React from 'react';
import { Paper, Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Box
        sx={{
          pt: 20,
          display: 'flex',
          justifyContent: 'center'
        }}>
		<Paper
      elevation={3}
      sx={{
        maxWidth: 250,
        padding: 2,
				borderRadius: 3, '& .MuiOutlinedInput-root, .MuiButton-root': { borderRadius: 3 }
      }}>
      <LoginForm />
    </Paper>
		</Box>
  );
};

export default Login;
