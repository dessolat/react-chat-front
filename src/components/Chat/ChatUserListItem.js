import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const ChatUserListItem = ({user}) => {
  return (
    <ListItem sx={{ padding: 0.5, paddingLeft: 2 }}>
      <ListItemText primary={user.name} />
    </ListItem>
  );
};

export default ChatUserListItem;
