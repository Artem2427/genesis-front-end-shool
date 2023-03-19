/* eslint-disable */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useCourse } from '@entities';
import { DetailsInfo, LessonsGrid } from '@features';
import { AppContext } from '@shared';
import { StyledCircularProgress, StyledWrapper } from './style';

import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';

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
        {activeLesson && activeLesson.link ? (
          <>
            {/* <VideoPlayer videoSource={activeLesson.link} preload="" /> */}
            <ReactPlayer
              url={activeLesson.link}
              playing={false}
              controls
              stopOnUnmount={false}
            />
          </>
        ) : null}
        <DetailsInfo course={course!} />
      </div>

      <LessonsGrid lessons={course && course.lessons ? course.lessons : []} />
    </StyledWrapper>
  );
};

export default CourseDetailsPage;
