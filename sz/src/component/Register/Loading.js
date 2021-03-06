import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';


const Loading = ({loading}) => {

  return (
    <Backdrop open = {loading} sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
      <CircularProgress sx={{ color: 'white' }} />
    </Backdrop>
  );
};

export default Loading;