import React from 'react';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider, AxiosProvider } from '@shared';
import { Routes } from '@pages';

import useReactQueryOptions from './hooks/useReactQueryOptions';
import '@assets/styles/index.css';

const App = () => {
  const queryClientConfig = useReactQueryOptions();

  const queryClient = new QueryClient(queryClientConfig as QueryClientConfig);

  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient} contextSharing>
        <AppContextProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </AppContextProvider>
      </QueryClientProvider>
    </AxiosProvider>
  );
};

export default App;
