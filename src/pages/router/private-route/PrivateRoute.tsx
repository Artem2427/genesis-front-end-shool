import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { authService, Routes } from '@shared';
import { Layout } from '@features';

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  if (authService.isLoggedIn()) {
    return <Layout>{children}</Layout>;
  }
  return <Navigate to={Routes.Login} />;
};

export default PrivateRoute;
