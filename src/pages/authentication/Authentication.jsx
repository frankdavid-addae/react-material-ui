import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CustomCard from '../../components/common/custom_card/CustomCard';
import SearchBar from '../../components/common/search_bar/SearchBar';
import CustomButton from '../../components/common/custom_button/CustomButton';
import GridWrapper from '../../components/common/grid_wrapper/GridWrapper';
import { cardHeaderStyles } from './styles';
import RefreshIcon from '@mui/icons-material/Refresh';

const Authentication = () => {

  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      console.log('Clicked');
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar 
          placeholder='Search by email address, phone number, or user UID'
          onChange = {(event) => handleChange(event.target.value)}
          searchBarWidth='700px'
        />
        <Box>
          <CustomButton
            variant='contained'
            size='large'
            sx={cardHeaderStyles.addUserButton}
            onClick={addUser}
          >
            Add user
          </CustomButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }

  const getContent = () => (
    <Typography 
      align="center"
      sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <GridWrapper>
      <CustomCard header={getHeader()} content={getContent()} />
    </GridWrapper>
  )
}

export default Authentication