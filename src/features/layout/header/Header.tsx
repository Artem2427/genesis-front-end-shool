import React, { FC, useContext, useEffect, useState } from 'react';

import { AppContext, authService } from '@shared';
import clsx from 'clsx';

import { Container, Toolbar } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  StyledAppBar,
  StyledAuthorizationBox,
  StyledButtonTypography,
  StyledLoginButton,
  StyledTypography,
  StyledBreadCrumb,
} from './style';

interface BreadCrumbsItemsInterface {
  title: string;
  path: string;
  isLink: boolean;
}

const Header: FC = () => {
  const {
    appContext: { currentRoute },
  } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId } = useParams();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  const [breadCrumbItems, setBreadCrumbItems] = useState<
    BreadCrumbsItemsInterface[]
  >([]);

  useEffect(() => {
    if (currentRoute) {
      if (
        courseId &&
        !breadCrumbItems.find((item) => item.path === currentRoute?.path)
      ) {
        const copy = [...breadCrumbItems].map((item) => ({
          ...item,
          isLink: true,
        }));

        const courseTitle = location.search
          .split('=')[1]
          .replaceAll('%20', ' ');

        setBreadCrumbItems([
          ...copy,
          {
            title: courseTitle.length ? courseTitle : '',
            path: currentRoute?.path || '',
            isLink: false,
          },
        ]);
      } else {
        setBreadCrumbItems([
          {
            title: currentRoute?.title || '',
            path: currentRoute?.path || '',
            isLink: false,
          },
        ]);
      }
    }
    // eslint-disable-next-line
  }, [courseId, currentRoute, location.search, setBreadCrumbItems]);

  const handleNavigate = (path: string): void => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledAuthorizationBox>
            <StyledBreadCrumb separator="/" aria-label="breadcrumb">
              {breadCrumbItems.map((item) => {
                return (
                  <StyledTypography
                    className={clsx({ disabled: !item.isLink })}
                    key={item.path}
                    onClick={() => handleNavigate(item.isLink ? item.path : '')}
                  >
                    {item.title}
                  </StyledTypography>
                );
              })}
            </StyledBreadCrumb>
            <StyledLoginButton onClick={handleLogout}>
              <StyledButtonTypography>Log out</StyledButtonTypography>
            </StyledLoginButton>
          </StyledAuthorizationBox>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
