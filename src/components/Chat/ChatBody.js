import { Box } from '@mui/material';
import React from 'react';
import MessageList from './MessageList';

const ChatBody = ({ messages, messagesEndRef }) => {
  return (
    <Box flexGrow={1} sx={{ padding: 2, overflowY: 'auto' }}>
      <MessageList messages={messages} />
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatBody;
