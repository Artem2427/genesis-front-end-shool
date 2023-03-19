import { AppContext } from '@shared';
import React, { FC, useContext, useEffect } from 'react';
import { Route, Routes as Switch, useLocation } from 'react-router-dom';

import NotFoundPage from '../not-found-page/NotFoundPage';
import PrivateRoute from './private-route/PrivateRoute';
import { ROUTES } from './router';

const Routes: FC = () => {
  const location = useLocation();
  const { setAppContext } = useContext(AppContext);

  const replaceUUIDToID = (path: string) => {
    const regex = /:\w+/gm;

    return ROUTES.find((route) => {
      const pathArray = path.split('/');

      const pathName = pathArray
        .map((item) => {
          if (item.length === 36) {
            return ':id';
          }

          return item;
        })
        .join('/');

      return route.path.replaceAll(regex, ':id') === pathName;
    });
  };

  useEffect(() => {
    const currentRoute = replaceUUIDToID(location.pathname);
    if (currentRoute) {
      setAppContext((state) => {
        return { ...state, currentRoute };
      });
    }
  }, [location.pathname, setAppContext]);

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
