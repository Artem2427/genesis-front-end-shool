import React, { FC, useEffect, useContext } from 'react';

import { Grid } from '@mui/material';

import { LessonInterface } from '@entities';
import { AppContext } from '@shared';
import LessonCard from '../lesson-card';

import {
  StyledEmptyBox,
  StyledInboxIcon,
  StyledTypography,
  StyledWrapper,
} from './style';

type Props = {
  lessons: LessonInterface[];
};

const LessonsGrid: FC<Props> = ({ lessons }) => {
  const { setAppContext } = useContext(AppContext);

  useEffect(() => {
    if (lessons.length) {
      const firstActiveLesson = lessons.find(
        (lesson) => lesson.status !== 'locked'
      );

      if (firstActiveLesson) {
        setAppContext((prev) => {
          return {
            ...prev,
            activeLesson: firstActiveLesson,
          };
        });
      }
    }
  }, [lessons, setAppContext]);

  if (!lessons.length) {
    return (
      <StyledEmptyBox>
        <StyledInboxIcon />
        <StyledTypography>No available lessons</StyledTypography>
      </StyledEmptyBox>
    );
  }

  return (
    <StyledWrapper>
      <Grid
        columns={{ xs: 1 }}
        container
        spacing={{ xs: 4, md: 2 }}
        sx={{ pt: 1 }}
      >
        {lessons?.map((lesson) => (
          <Grid item key={lesson.id} md={4} sm={4} xs={2}>
            <LessonCard lesson={lesson} />
          </Grid>
        ))}
      </Grid>
    </StyledWrapper>
  );
};

export default LessonsGrid;
