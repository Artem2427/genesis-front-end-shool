import { AppBar, Box, Breadcrumbs, Button, Typography } from '@mui/material';
import { Palette } from '@shared';
import styled from 'styled-components';

export const StyledAppBar = styled(AppBar)`
  &.MuiPaper-root.MuiAppBar-root {
    background: ${Palette.black};
  }

  overflow: hidden;
`;

export const StyledBreadCrumb = styled(Breadcrumbs)`
  &.MuiBreadcrumbs-root .MuiBreadcrumbs-separator {
    font-size: 40px;
    color: ${Palette.white};
  }
`;

export const StyledAuthorizationBox = styled(Box).attrs(() => ({
  sx: {
    display: 'flex',
    flexGrow: { xs: 1, md: 0 },
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
}))``;

export const StyledLoginButton = styled(Button).attrs(() => ({
  sx: {
    color: Palette.orange,
    borderColor: Palette.orange,
    '&:hover': {
      color: Palette.orangeLight,
      borderColor: Palette.orangeLight,
    },
  },
  variant: 'outlined',
}))``;

export const StyledTypography = styled(Typography).attrs(() => ({
  variant: 'subtitle2',
  align: 'left',
  fontSize: '32px',
  sx: {
    color: Palette.light,
    fontWeight: 300,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}))`
  cursor: pointer;
  &.disabled {
    color: ${Palette.greyMiddle};
    cursor: not-allowed;
  }
`;

export const StyledButtonTypography = styled(Typography).attrs(() => ({
  noWrap: true,
  sx: { fontSize: { xs: '12px', sm: '14px', md: '16px' } },
}))``;
