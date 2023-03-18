import { AxiosError, AxiosRequestConfig } from 'axios';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { useAxiosContext } from '../../../providers/AxiosProvider';
import { ACCESS_TOKEN_KEY } from '../../../utils';
import { LOGIN } from '../../endpoint-constants';

interface AuthResponseInterface {
  token: string;
}

export default function useCities<TData = AuthResponseInterface>(
  params?: object,
  options?: UseQueryOptions<AuthResponseInterface, AxiosError, TData>,
  config?: AxiosRequestConfig
): UseQueryResult<TData, AxiosError> {
  const axios = useAxiosContext();

  const login = async (): Promise<AuthResponseInterface> => {
    const { data } = await axios.get<AuthResponseInterface>(LOGIN, config);

    return data;
  };

  return useQuery<AuthResponseInterface, AxiosError, TData>(
    [ACCESS_TOKEN_KEY],
    login,
    options
  );
}
