export type LessonStatus = 'locked' | 'unlocked';

export interface LessonInterface {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: LessonStatus;
  link: string;
  previewImageLink: string;
  meta: null;
}
