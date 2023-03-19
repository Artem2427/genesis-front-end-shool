import { Box, CircularProgress, Typography } from '@mui/material';
import { Palette } from '@shared';
import InboxIcon from '@mui/icons-material/Inbox';
import styled from 'styled-components';

export const StyledEmptyBox = styled(Box).attrs(() => ({
  sx: {
    m: '30vh auto',
    fontSize: '90px',
    color: Palette.greyMiddle,
    textAlign: 'center',
  },
}))``;

export const StyledInboxIcon = styled(InboxIcon).attrs(() => ({
  sx: { fontSize: '90px' },
}))``;

export const StyledTypography = styled(Typography).attrs(() => ({
  noWrap: true,
  variant: 'h5',
}))``;

export const StyledCircularProgress = styled(CircularProgress).attrs(() => ({
  sx: {
    m: '30vh 50%',
    color: Palette.orange,
  },
}))``;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
