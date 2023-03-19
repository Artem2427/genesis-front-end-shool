import React, { useEffect, useMemo, useState } from 'react';

import { CoursesGrid } from '@features';
import { CourseInterface, useCourses } from '@entities';
import { PaginationInterface } from '@shared';

const CoursesListPage = () => {
  const { data: courses, isLoading } = useCourses();

  const [pagination, setPagination] = useState<PaginationInterface>({
    page: 1,
    pageSize: 10,
  });

  const showCourses: CourseInterface[] = useMemo(() => {
    if (courses) {
      const copy = [...courses];
      const { page, pageSize } = pagination;
      return copy.slice((page - 1) * pageSize, page * pageSize);
    }
    return [] as CourseInterface[];
  }, [pagination, courses]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pagination.page]);

  return (
    <div>
      <CoursesGrid
        loading={isLoading}
        pagination={pagination}
        courseList={showCourses}
        setPagination={setPagination}
        totalAmount={
          courses ? Math.round(courses.length / pagination.pageSize) : 0
        }
      />
    </div>
  );
};

export default CoursesListPage;
