import { Button } from '@mui/material';
import { Palette } from '@shared';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.grey};
`;

export const StyledErrorNumber = styled.span`
  font-weight: 600;
`;

export const StyledBackButton = styled(Button).attrs(() => ({
  variant: 'contained',
}))``;
