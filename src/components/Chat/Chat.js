import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box } from '@mui/material';
import { setName } from '../../redux/actionCreators';
import useLogging from '../../hooks/useLogging';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import ConnectionNotifier from './ConnectionNotifier';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const channel = useSelector(state => state.channel);
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
          <ChatBody messages={messages} messagesEndRef={messagesEndRef} />
          <ChatFooter socket={socket} connected={connected} />
        </Paper>
      </Box>
      <ConnectionNotifier connected={connected} snackbar={snackbar} setSnackbar={setSnackbar} />
    </>
  );
};

export default Chat;
