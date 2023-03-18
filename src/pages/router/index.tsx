import React, { FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import NotFoundPage from '../not-found-page/NotFoundPage';
import PrivateRoute from './private-route/PrivateRoute';
import { ROUTES } from './router';

const Routes: FC = () => {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.requireAuth ? (
              <PrivateRoute>{route.component}</PrivateRoute>
            ) : (
              route.component
            )
          }
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Switch>
  );
};

export default Routes;
