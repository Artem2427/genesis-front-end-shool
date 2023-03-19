import useCourses from './api/queries/useCourses';
import useCourse from './api/queries/useCourse';

export type {
  CourseInterface,
  CourseMetaInterface,
  CourseVideoPreviewInterface,
} from './types/course.interface';

export { useCourses, useCourse };
