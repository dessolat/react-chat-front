import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box, TextField, Stack, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { setName } from '../redux/actionCreators';
import useInput from '../hooks/useInput';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();
  const [input, setInput] = useInput();
  const name = useSelector(state => state.name);
  const channel = useSelector(state => state.channel);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef();

  useEffect(() => {
    setSocket(io('http://localhost:5000'));

    if (!name) {
      const savedName = localStorage.getItem('name');
      dispatch(setName(savedName));
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket === null) return;

    socket.on('connect', () => {
      socket.emit('join', { name, channel });
    });

    socket.on('receive-message', (name, message) => {
      setMessages(prev => [...prev, { name, message }]);
    });
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
		setInput('')
  };

  return (
    <Box pt={5}>
      <Paper
        elevation={3}
        sx={{
          height: '80vh',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: 3,
          '& .MuiOutlinedInput-root, .MuiButton-root': { borderRadius: 5 },
          '& .MuiButton-endIcon': { marginLeft: 0 }
        }}>
        <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
          {messages.map(message => (
            <Stack direction='row' justifyContent='flex-end' mt={1}>
              <Stack sx={{ backgroundColor: 'primary' }}>
                <Typography>{`${message.name}: ${message.message}`}</Typography>
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
          />
          <Button
            variant='contained'
            type='submit'
            size='small'
            endIcon={<SendIcon />}
            sx={{ minWidth: '38px' }}></Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Chat;
