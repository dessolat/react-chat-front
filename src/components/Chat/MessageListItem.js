import React from 'react';
import { Stack, Typography } from '@mui/material';

const MessageListItem = ({ message }) => (
  <Stack direction='row' justifyContent='flex-end' mt={1}>
    <Stack sx={{ bgcolor: 'primary.main', color: 'white', padding: 1, borderRadius: 5 }}>
      <Typography sx={{ fontSize: '1rem' }}>{`${message.name}: ${message.message}`}</Typography>
    </Stack>
  </Stack>
);

export default MessageListItem;
