import { ReactNode } from 'react';
import { RouteKeys } from '../utils/enums';

export interface RouterItem {
  title: string;
  key: RouteKeys;
  path: string;
  requireAuth: boolean;
  component: ReactNode;
}

export interface PaginationInterface {
  page: number;
  pageSize: number;
}
