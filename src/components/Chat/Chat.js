import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box, Stack, List, ListItem, ListItemText } from '@mui/material';
import { setName } from '../../redux/actionCreators';
import useLogging from '../../hooks/useLogging';

import ConnectionNotifier from './ConnectionNotifier';
import ChatContent from './ChatContent';
import ChatHeader from './ChatHeader';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [users, setUsers] = useState([]);
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

    const removeUser = username => {
      setUsers(prev => prev.filter(user => user.name !== username));
    };

    const addUser = user => {
      setUsers(prev => [...prev, user]);
    };

    socket.on('connect', () => {
      setConnected(true);
      setSnackbar(true);
      socket.emit('join', { name, channel }, userList => {
        setUsers(userList);
      });
    });

    socket.on('disconnect', () => {
      setConnected(false);
      setSnackbar(true);
    });

    socket.on('receive-message', (name, message) => {
      setMessages(prev => [...prev, { name, message }]);
    });

    socket.on('user-left', name => removeUser(name));
    socket.on('user-join', user => addUser(user));

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
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'space-between',
            paddingBottom: 1,
            borderRadius: 3,
            '& .MuiOutlinedInput-root, .MuiButton-root': { borderRadius: 5 },
            '& .MuiButton-endIcon': { marginLeft: 0 }
          }}>
          <Stack component='aside' >
            <ChatHeader />
            <List
              sx={{
                paddingTop: 0,
                '& .MuiListItem-root + .MuiListItem-root': { borderTop: '1px solid #f2f2f2' }
              }}>
              {users.map((user, i) => (
                <ListItem key={i} sx={{ padding: 0.5, paddingLeft: 2 }}>
                  <ListItemText primary={user.name} />
                </ListItem>
              ))}
            </List>
          </Stack>
          <ChatContent
            messages={messages}
            messagesEndRef={messagesEndRef}
            socket={socket}
            connected={connected}
          />
        </Paper>
      </Box>
      <ConnectionNotifier connected={connected} snackbar={snackbar} setSnackbar={setSnackbar} />
    </>
  );
};

export default Chat;
