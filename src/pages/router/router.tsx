import { RouteKeys, RouterItem, Routes } from '@shared';

import { CourseDetailsPage } from '../course-details-page';
import { CoursesListPage } from '../courses-list-page';
import { LoginPage } from '../login-page';

export const ROUTES: RouterItem[] = [
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
