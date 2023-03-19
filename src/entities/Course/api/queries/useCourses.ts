import type { UseQueryOptions, UseQueryResult } from 'react-query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';

import { QUERY_KEYS, useAxiosContext } from '@shared';
import { COURSES_LIST } from '../endpoint-constants';
import { CourseInterface } from '../../types/course.interface';

export default function useCourse<TData = CourseInterface[]>(
  params?: object,
  options?: UseQueryOptions<CourseInterface[], AxiosError, TData>,
  config?: AxiosRequestConfig
): UseQueryResult<TData, AxiosError> {
  const axios = useAxiosContext();

  const fetchCourses = async (): Promise<CourseInterface[]> => {
    const { data } = await axios.get<{ courses: CourseInterface[] }>(
      `${COURSES_LIST}`,
      config
    );
    return data.courses;
  };

  return useQuery<CourseInterface[], AxiosError, TData>(
    [QUERY_KEYS.COURSES],
    fetchCourses,
    options
  );
}
