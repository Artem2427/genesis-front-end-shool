import { ReactNode } from 'react';

import { RouteKeys, Routes } from '@shared';

import { CourseDetailsPage } from '../course-details-page';
import { CoursesListPage } from '../courses-list-page';
import { LoginPage } from '../login-page';

export interface RouterItem {
  title: string;
  key: RouteKeys;
  path: string;
  requiresAuth: boolean;
  component: ReactNode;
  headerInfo?: ReactNode;
}

export const ROUTES = [
  {
    title: 'Login',
    key: RouteKeys.Login,
    path: Routes.Login,
    requireAuth: false,
    component: <LoginPage />,
  },
  {
    title: 'Courses list',
    key: RouteKeys.CoursesList,
    path: Routes.CoursesList,
    requireAuth: true,
    component: <CoursesListPage />,
  },
  {
    title: 'Course',
    key: RouteKeys.Course,
    path: Routes.Course,
    requireAuth: true,
    component: <CourseDetailsPage />,
  },
];
