import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';
import NotificationBell from '../notification_bell/NotificationBell';
import CustomButton from '../custom_button/CustomButton';
import avatar from '../../../static/images/avatar.jpg';
import { headerStyles } from './styles';

const Header = ({title}) => {
  
  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>Go to docs</Typography>
        <NotificationBell badgeColor='white'/>
        <Avatar alt="Avatar" src={avatar} />
      </Box>
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" color="white">{title}</Typography>
        <Box>
          <CustomButton sx={headerStyles.webButton} variant='outlined'>Web Setup</CustomButton>
          <Tooltip title='Help'>
            <IconButton color="white" sx={headerStyles.helpIcon}><HelpIcon /></IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default Header