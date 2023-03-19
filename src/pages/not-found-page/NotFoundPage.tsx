import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import { StyledWrapper, StyledErrorNumber, StyledBackButton } from './style';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackHomePage = () => {
    navigate('/');
  };

  return (
    <StyledWrapper>
      <Typography fontSize="48px">
        Not Found page <StyledErrorNumber>404</StyledErrorNumber>
      </Typography>
      <Box marginTop={2}>
        <StyledBackButton
          onClick={handleBackHomePage}
          startIcon={<ArrowBackIcon />}
        >
          Back to home page
        </StyledBackButton>
      </Box>
    </StyledWrapper>
  );
};

export default NotFoundPage;
