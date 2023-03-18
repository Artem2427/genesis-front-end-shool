import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import type { AxiosInstance } from 'axios';
import { authService } from '../services/AuthService';

const AxiosContext = createContext<AxiosInstance>(
  new Proxy(axios.create(), {})
);

const AxiosProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}): JSX.Element => {
  const axiosInstance: AxiosInstance = React.useMemo(() => {
    const ax = axios.create({
      baseURL: import.meta.env.VITE_API,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Vary: 'Origin',
      },
    });

    ax.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (authService.isLoggedIn() && config.headers) {
        (config.headers as AxiosHeaders).set(
          'Authorization',
          `Bearer ${authService.getAccessToken()}`
        );
      }

      return config;
    });

    ax.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          authService.logout();
        }

        return Promise.reject(error);
      }
    );

    ax.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      return config;
    });

    return ax;
  }, []);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

const useAxiosContext = (): AxiosInstance => {
  const context = useContext(AxiosContext);

  if (!context) {
    throw new Error(
      'AxiosContext can only be used withing AxiosProvider component.'
    );
  }

  return context;
};

export { AxiosProvider, useAxiosContext };
