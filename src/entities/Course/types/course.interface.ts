import { LessonInterface } from '../../Lesson/types/lesson.interface';

export interface CourseInterface {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount?: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: CourseMetaInterface;
  lessons?: LessonInterface[];
}

export interface CourseMetaInterface {
  slug: string;
  skills: string[];
  courseVideoPreview: CourseVideoPreviewInterface;
}

export interface CourseVideoPreviewInterface {
  link: string;
  duration: number;
  previewImageLink: string;
}
