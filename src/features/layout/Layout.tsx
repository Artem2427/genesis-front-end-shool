import { Container } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import { StyledMain, Wrapper } from './style';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <StyledMain>
        <Container maxWidth="xl">{children}</Container>
      </StyledMain>
    </Wrapper>
  );
};

export default Layout;
