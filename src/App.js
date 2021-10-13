import { useEffect } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/routes';
import { useSelector } from 'react-redux';
import useLogging from './hooks/useLogging';
import './App.scss';

function App() {
  const isLogged = useSelector(state => state.isLogged);
	const login = useLogging()

  useEffect(() => {
		const logged = localStorage.getItem('isLogged');
		logged === 'true' && login(true)
		// eslint-disable-next-line
	}, []);

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
