import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { cardStyles } from './styles';

const CustomCard = ({ header, content }) => {
  return (
    <Card sx={cardStyles}>
      {header}
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
};

export default CustomCard