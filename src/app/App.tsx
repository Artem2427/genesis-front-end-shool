import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AxiosProvider } from '@shared';
import { Routes } from '@pages';

import '@assets/styles/index.css';
import useReactQueryOptions from './hooks/useReactQueryOptions';

const App = () => {
  // const link =
  //   'https://wisey.app/assets/images/web/course-covers/learn-and-grow-self-improvement' +
  //   '/cover.webp';
  const queryClientConfig = useReactQueryOptions();

  const queryClient = new QueryClient(queryClientConfig);

  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </AxiosProvider>
  );
};

export default App;
