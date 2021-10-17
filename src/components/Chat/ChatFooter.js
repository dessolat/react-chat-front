import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useInput from '../../hooks/useInput';
import { useSelector } from 'react-redux';

const ChatFooter = ({ socket, connected }) => {
  const [input, setInput] = useInput();
  const name = useSelector(state => state.name);
  const channel = useSelector(state => state.channel);

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('send-message', { name, channel }, input);
    setInput('');
  };

  return (
    <Stack p={1} pb={0} direction='row' spacing={1} component='form' onSubmit={handleSubmit}>
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
  );
};

export default ChatFooter;
