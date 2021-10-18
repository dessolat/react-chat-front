import React from 'react';
import { Stack } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatUserList from './ChatUserList';

const ChatAside = ({ users }) => {
  return (
    <Stack component='aside'>
      <ChatHeader />
      <ChatUserList users={users} />
    </Stack>
  );
};

export default ChatAside;
