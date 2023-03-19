import { Card, Typography } from '@mui/material';
import { Palette } from '@shared';
import styled from 'styled-components';

export const MediaStyle = {
  height: '15em',
};

export const StyledTypography = styled(Typography).attrs(() => ({
  gutterBottom: true,
  variant: 'subtitle1',
  sx: {
    textDecoration: 'none',
    color: Palette.black,
    fontSize: '18px',
    fontWeight: 600,
  },
}))``;

export const StyledCard = styled(Card)`
  position: relative;
`;

export const StyledMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Palette.greyDark};
  cursor: not-allowed !important;
  opacity: 0.5;
  z-index: 100;
`;
