import { Alert, Slide, Snackbar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const ConnectionNotifier = ({ connected, snackbar, setSnackbar }) => {
  const name = useSelector(state => state.name);

  const SlideTransition = props => <Slide {...props} direction='up' />;

  return (
    <Snackbar
      open={snackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={() => setSnackbar(false)}
			autoHideDuration={2000}
      TransitionComponent={SlideTransition}>
      <Alert
        onClose={() => setSnackbar(false)}
        severity={connected ? 'success' : 'error'}
        sx={{ width: '100%' }}>
        {connected ? `You are succesfully connected to chat as ${name}` : `You are disconnected from chat`}
      </Alert>
    </Snackbar>
  );
};

export default ConnectionNotifier;
