import React from 'react';
import { Chip, Stack, Typography } from '@mui/material';

const MessageListItem = ({ message }) => (
  <Stack direction='row' justifyContent='flex-end' mt={1}>
    <Stack
      direction='column'
      bgcolor='#ccdaf1'
      color='black'
      p={0.8}
      alignItems='flex-end'
      sx={{
        borderRadius: '10px 10px 0 10px',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: '-4px',
          width: '4px',
          height: '4px',
          border: '2px solid transparent',
          borderBottom: '2px solid #ccdaf1',
          borderLeft: '2px solid #ccdaf1'
        }
      }}>
      <Chip
        label={message.name}
        sx={{
          bgcolor: '#FFFFFF',
          color: 'primary.main',
          fontWeight: 500,
          fontSize: '0.8rem',
          height: '1rem',
          '& .MuiChip-label': { padding: '0 5px' }
        }}
      />
			
      <Typography fontSize='.8rem' sx={{ lineHeight: 1.1, padding: '4px 1px 0 2px' }}>
        {message.message}
      </Typography>
    </Stack>
  </Stack>
);

export default MessageListItem;
