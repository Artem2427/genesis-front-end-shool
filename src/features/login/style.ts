import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledBox = styled(Box).attrs(() => ({
  sm: {
    minWidth: '300px',
    maxWidth: '600px',
    padding: '15px',
  },
}))``;

export const StyledButtonLogin = styled(Button).attrs(() => ({
  variant: 'contained',
  size: 'large',
}))`
  width: 100%;
  font-size: 24px !important;
`;
