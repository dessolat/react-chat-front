import React from 'react';
import { Paper, Box, TextField, Stack, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  return (
    <Box pt={5}>
      <Paper
        elevation={3}
        sx={{
          height: '80vh',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: 3,
          '& .MuiOutlinedInput-root, .MuiButton-root': { borderRadius: 5 },
          '& .MuiButton-endIcon': { marginLeft: 0 }
        }}>
        <Box></Box>
        <Stack pt={2} direction='row' spacing={1}>
          <TextField placeholder='Text to send' size='small' sx={{ flexGrow: 1 }} />
          <Button
            variant='contained'
            size='small'
            endIcon={<SendIcon />}
            sx={{ minWidth: '38px' }}></Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Chat;
