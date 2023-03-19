import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import { Grid, Pagination } from '@mui/material';

import { CourseInterface } from '@entities';
import { PaginationInterface } from '@shared';
import CourseCard from '../course-card';

import {
  StyledStack,
  StyledCircularProgress,
  StyledEmptyBox,
  StyledInboxIcon,
  StyledTypography,
} from './style';

type Props = {
  loading: boolean;
  courseList: CourseInterface[];
  totalAmount: number;
  pagination: PaginationInterface;
  setPagination: Dispatch<SetStateAction<PaginationInterface>>;
};

const CoursesGrid: FC<Props> = ({
  loading,
  courseList,
  totalAmount,
  pagination,
  setPagination,
}) => {
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPagination((prev) => {
      return {
        ...prev,
        page: value,
      };
    });
  };

  if (!courseList.length && loading) {
    return <StyledCircularProgress />;
  }
  if (!courseList.length) {
    return (
      <StyledEmptyBox>
        <StyledInboxIcon />
        <StyledTypography>No available courses</StyledTypography>
      </StyledEmptyBox>
    );
  }

  return (
    <>
      <Grid
        columns={{ xs: 2, sm: 8, md: 12 }}
        container
        spacing={{ xs: 4, md: 2 }}
        sx={{ pt: 1 }}
      >
        {courseList?.map((course) => (
          <Grid item key={course.id} md={4} sm={4} xs={2}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>

      <StyledStack>
        {totalAmount > 1 && (
          <Pagination
            count={totalAmount}
            onChange={handleChange}
            page={pagination.page}
          />
        )}
      </StyledStack>
    </>
  );
};

export default CoursesGrid;
