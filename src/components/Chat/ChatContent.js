import { Stack } from '@mui/material';
import React from 'react';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';

const ChatContent = ({ messages, messagesEndRef, socket, connected }) => {
  return (
    <Stack height='100%' flexDirection='column' justifyContent='space-between' flexGrow={1}>
      <ChatHeader />
      <ChatBody messages={messages} messagesEndRef={messagesEndRef} />
      <ChatFooter socket={socket} connected={connected} />
    </Stack>
  );
};

export default ChatContent;
