import type { UseQueryOptions, UseQueryResult } from 'react-query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';

import { getUrl, QUERY_KEYS, useAxiosContext } from '@shared';
import { COURSE_ID_KEY, COURSE_ONE } from '../endpoint-constants';
import { CourseInterface } from '../../types/course.interface';

export default function useCompanies<TData = CourseInterface>(
  courseId: string,
  options?: UseQueryOptions<CourseInterface, AxiosError, TData>,
  config?: AxiosRequestConfig
): UseQueryResult<TData, AxiosError> {
  const axios = useAxiosContext();

  const fetchOneCourse = async (): Promise<CourseInterface> => {
    const { data } = await axios.get(
      getUrl(COURSE_ONE, [{ key: COURSE_ID_KEY, value: courseId }]),
      config
    );
    return data;
  };

  return useQuery<CourseInterface, AxiosError, TData>(
    [QUERY_KEYS.COURSE],
    fetchOneCourse,
    options
  );
}
