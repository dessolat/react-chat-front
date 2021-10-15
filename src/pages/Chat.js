import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box, TextField, Stack, Button, Typography, Slide, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { setName } from '../redux/actionCreators';
import useInput from '../hooks/useInput';
import useLogging from '../hooks/useLogging';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const channel = useSelector(state => state.channel);
  const [input, setInput] = useInput();
  const login = useLogging();
  const messagesEndRef = useRef();

  useEffect(() => {
    setSocket(io('http://192.168.1.24:5000'));

    if (!name) {
      const savedName = localStorage.getItem('name');
      savedName ? dispatch(setName(savedName)) : login(false);
    }

    return () => {
      socket && socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (socket === null) return;

    socket.on('connect', () => {
      setConnected(true);
      setSnackbar(true);
      socket.emit('join', { name, channel });
    });

    socket.on('disconnect', () => {
      setConnected(false);
      setSnackbar(true);
    });

    socket.on('receive-message', (name, message) => {
      setMessages(prev => [...prev, { name, message }]);
    });
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('send-message', { name, channel }, input);
    setInput('');
  };

  function SlideTransition(props) {
    return <Slide {...props} direction='up' />;
  }

  return (
    <>
      <Box pt={5}>
        <Paper
          elevation={3}
          sx={{
            height: '80vh',
            padding: '20px 10px 10px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: 3,
            '& .MuiOutlinedInput-root, .MuiButton-root': { borderRadius: 5 },
            '& .MuiButton-endIcon': { marginLeft: 0 }
          }}>
          <Box flexGrow={1} sx={{ padding: 2, overflowY: 'auto' }}>
            {messages.map((message, i) => (
              <Stack key={i} direction='row' justifyContent='flex-end' mt={1}>
                <Stack sx={{ bgcolor: 'primary.main', color: 'white', padding: 1, borderRadius: 5 }}>
                  <Typography sx={{ fontSize: '1rem' }}>{`${message.name}: ${message.message}`}</Typography>
                </Stack>
              </Stack>
            ))}
            <div ref={messagesEndRef} />
          </Box>
          <Stack pt={2} direction='row' spacing={1} component='form' onSubmit={handleSubmit}>
            <TextField
              value={input}
              onChange={setInput}
              placeholder='Text to send'
              size='small'
              sx={{ flexGrow: 1 }}
              disabled={!connected}
            />
            <Button
              variant='contained'
              type='submit'
              size='small'
              disabled={!connected}
              endIcon={<SendIcon />}
              sx={{ minWidth: '38px' }}></Button>
          </Stack>
        </Paper>
      </Box>
      <Snackbar
        open={snackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setSnackbar(false)}
        TransitionComponent={SlideTransition}>
        <Alert
          onClose={() => setSnackbar(false)}
          severity={connected ? 'success' : 'error'}
          sx={{ width: '100%' }}>
          {connected ? `You are succesfully connected to chat as ${name}` : `You are disconnected from chat`}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Chat;
