import React, { FC } from 'react';

import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import SchoolIcon from '@mui/icons-material/School';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { CardActionArea, CardContent, CardMedia, Card } from '@mui/material';
import { Link } from 'react-router-dom';

import { CourseInterface } from '@entities';
import emptyImageUrl from '@assets/img/empty-image.png';
import {
  TypeText,
  Container,
  FlexContainer,
  LastDiv,
  TypeItem,
  MediaStyle,
  StyledTypography,
} from './style';

interface Props {
  course: CourseInterface;
}

const CourseCard: FC<Props> = ({ course }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Link
        to={`/course/${course.id}?course=${course.title}`}
        style={{ textDecoration: 'none' }}
      >
        <CardActionArea>
          <CardMedia
            alt="car"
            component="img"
            image={
              course.previewImageLink
                ? `${course.previewImageLink}/cover.webp`
                : emptyImageUrl
            }
            style={MediaStyle}
          />
          <CardContent>
            <StyledTypography>{course.title}</StyledTypography>
            <Container>
              <FlexContainer>
                <PlayLessonIcon fontSize="inherit" />
                <TypeItem>Lessons:</TypeItem>
                <TypeText>{course.lessonsCount}</TypeText>
              </FlexContainer>
              <FlexContainer>
                <SchoolIcon fontSize="inherit" />
                <TypeItem>Skills:</TypeItem>
                <TypeText>{course.meta.skills.join(', ')}</TypeText>
              </FlexContainer>
              <LastDiv>
                <ReviewsIcon fontSize="inherit" />
                <TypeItem>Rating:</TypeItem>
                <TypeText>{course.rating}</TypeText>
              </LastDiv>
            </Container>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CourseCard;
