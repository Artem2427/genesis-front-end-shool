/* eslint-disable */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useCourse } from '@entities';
import { DetailsInfo, LessonsGrid, VideoPlayer } from '@features';
import { AppContext } from '@shared';
import { StyledCircularProgress, StyledWrapper } from './style';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const {
    appContext: { activeLesson },
  } = useContext(AppContext);

  const { data: course, isLoading } = useCourse(courseId!, {
    enabled: !!courseId,
  });

  if (isLoading) {
    return <StyledCircularProgress />;
  }

  return (
    <StyledWrapper>
      <div>
        {activeLesson ? (
          <VideoPlayer videoSource={activeLesson.link} preload="" />
        ) : null}
        <DetailsInfo course={course!} />
      </div>

      <LessonsGrid lessons={course && course.lessons ? course.lessons : []} />
    </StyledWrapper>
  );
};

export default CourseDetailsPage;
