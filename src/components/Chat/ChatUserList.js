import React from 'react';
import { List } from '@mui/material';
import ChatUserListItem from './ChatUserListItem';

const ChatUserList = ({ users }) => {
  return (
    <List
      sx={{
        paddingTop: 0,
        '& .MuiListItem-root + .MuiListItem-root': { borderTop: '1px solid #f2f2f2' }
      }}>
      {users.map(user => (
        <ChatUserListItem key={user.name} user={user} />
      ))}
    </List>
  );
};

export default ChatUserList;
