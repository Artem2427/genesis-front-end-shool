import { useMemo, useState } from 'react';
import { QueryClientConfig } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useReactQueryOptions = (): QueryClientConfig => {
  const [retry, setRetry] = useState(true);

  const shouldRetry = (failureCount: number, error: unknown): boolean => {
    const isAxiosError = (e: unknown): e is AxiosError => {
      return (e as AxiosError).isAxiosError !== undefined;
    };

    if (isAxiosError(error)) {
      if (error.response?.status !== undefined) {
        const { status } = error.response;

        if (status >= 500) {
          setRetry(true);
          return true;
        }

        if (status >= 400) {
          setRetry(false);
          return false;
        }
      }
      setRetry(false);
      return false;
    }

    setRetry(true);
    return true;
  };

  const queryOptions = useMemo((): QueryClientConfig => {
    return {
      defaultOptions: {
        queries: {
          retry: shouldRetry,
          refetchIntervalInBackground: retry,
          refetchOnWindowFocus: false,
          refetchOnReconnect: retry,
          refetchOnMount: retry,
          retryOnMount: retry,

          useErrorBoundary: false,
          onError: (): void => {
            console.error('Something went wrong in a query.'); // eslint-disable-line
          },
        },

        mutations: {
          useErrorBoundary: false,
          onError: (): void => {
            console.error('Something went wrong in a mutation.'); // eslint-disable-line
          },
        },
      },
    };
  }, [retry]);

  return queryOptions;
};

export default useReactQueryOptions;
