import { useState } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { privateRoutes, publicRoutes } from './routes/routes';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Container maxWidth='md'>
      <CssBaseline />
      <Box
        sx={{
          pt: 20,
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Router>{isLogged ? privateRoutes() : publicRoutes()}</Router>
      </Box>
    </Container>
  );
}

export default App;
