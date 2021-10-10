import { Container, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
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
