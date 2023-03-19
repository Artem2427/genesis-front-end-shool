import React, { FC } from 'react';
import { CourseInterface } from '@entities';

import { FlexContainer, TypeItem, TypeText } from './style';

interface Props {
  course: CourseInterface;
}

const DetailsInfo: FC<Props> = ({ course }) => {
  return (
    <div>
      <FlexContainer>
        <TypeItem>Description:</TypeItem>
        <TypeText>{course.description}</TypeText>
      </FlexContainer>
      <FlexContainer>
        <TypeItem>Skills:</TypeItem>
        <TypeText>{course.meta.skills.join(', ')}</TypeText>
      </FlexContainer>
      <FlexContainer>
        <TypeItem>Rating:</TypeItem>
        <TypeText>{course.rating}</TypeText>
      </FlexContainer>
      <FlexContainer>
        <TypeItem>Duration:</TypeItem>
        <TypeText>{course.duration}</TypeText>
      </FlexContainer>
      <FlexContainer>
        <TypeItem>Status:</TypeItem>
        <TypeText>{course.status}</TypeText>
      </FlexContainer>
    </div>
  );
};

export default DetailsInfo;
