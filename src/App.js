import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
import './App.scss';



function App() {
  return (
    <Container maxWidth='md'>
      <CssBaseline />
			<Router>
				<Route path="/" exact component={Login} />
				<Route path="/chat" component={Chat} />
			</Router>
    </Container>
  );
}

export default App;
