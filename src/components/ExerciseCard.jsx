/* eslint-disable key-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#e35d5d',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          ":hover":{
            color: '#e35d5d',
            background: '#fff',
            border: '1px solid #e35d5d',
          }
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#e8a415',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          ":hover":{
            color: '#e8a415',
            background: '#fff',
            border: '1px solid #e8a415',
          }
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '20px', xs: '18px' } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
