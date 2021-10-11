import { Container, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';
import './App.scss';

function App() {
  return (
    <Container maxWidth='md'>
      <CssBaseline />
      <Box
        sx={{
          pt: 20,
          display: 'flex',
					justifyContent: 'center'
        }}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/chat' component={Chat} />
        </Router>
      </Box>
    </Container>
  );
}

export default App;
