import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import {
  ACCESS_TOKEN_KEY,
  storageService,
  useAuth,
  AlertNotification,
} from '@shared';

import { StyledBox, StyledButtonLogin } from './style';

const Login: FC = () => {
  const navigate = useNavigate();
  const { data, refetch: login, isError } = useAuth({}, { enabled: false });

  const [errorMessage, setErrorMessage] = useState('');
  const [openAlert, setOpenAlert] = useState(false);

  const handleLogin = () => {
    login();
  };

  useEffect(() => {
    if (data?.token) {
      storageService.set(ACCESS_TOKEN_KEY, data.token);
      navigate('/');
    }
  }, [data, navigate]);

  useEffect(() => {
    if (isError) {
      setErrorMessage('Something went wrong, try it again');
      setOpenAlert(true);
    }
  }, [isError]);

  return (
    <StyledBox>
      <AlertNotification
        alert={errorMessage}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        severity="error"
      />
      <Typography variant="h1">Welcome to study platform</Typography>
      <Box width="100%" marginTop={2}>
        <StyledButtonLogin onClick={handleLogin} disabled={openAlert}>
          Sign in!
        </StyledButtonLogin>
      </Box>
    </StyledBox>
  );
};

export default Login;
