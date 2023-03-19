import React, { FC, useContext } from 'react';
import { LessonInterface } from '@entities';
import { CardActionArea, CardContent, CardMedia } from '@mui/material';
import emptyImageUrl from '@assets/img/empty-image.png';

import { AppContext } from '@shared';
import { MediaStyle, StyledTypography, StyledCard, StyledMask } from './style';

interface Props {
  lesson: LessonInterface;
}

const LessonCard: FC<Props> = ({ lesson }) => {
  const { setAppContext } = useContext(AppContext);

  const handleSelectLesson = () => {
    if (lesson.status !== 'locked') {
      setAppContext((prev) => {
        return {
          ...prev,
          activeLesson: lesson,
        };
      });
    }
  };

  return (
    <StyledCard sx={{ height: '100%' }} onClick={handleSelectLesson}>
      {lesson.status === 'locked' ? <StyledMask /> : null}

      <CardActionArea>
        <CardMedia
          alt={lesson.title}
          component="img"
          image={
            lesson.previewImageLink
              ? `${lesson.previewImageLink}/lesson-${lesson.order}.webp`
              : emptyImageUrl
          }
          style={MediaStyle}
        />
        <CardContent>
          <StyledTypography>
            {lesson.title} - {lesson.duration}
          </StyledTypography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default LessonCard;
