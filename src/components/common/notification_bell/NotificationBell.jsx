import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../basic_menu/BasicMenu';

const notifications = [
  {
      id: 0,
      label: 'First notification'
  },
  {
      id: 1,
      label: 'Second notification'
  },
];

const NotificationBell = ({ badgeColor }) => {
  const newNotifications = `You have ${notifications.length} new notifications.`;
  const noNotification = 'No new notification.';

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title={notifications.length ? newNotifications : noNotification}>
        <IconButton
          color={badgeColor}
          onClick={notifications.length ? handleOpen : null}
        >
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsIcon color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu 
        anchorEl={anchorEl} 
        handleClose={handleClose} 
        open={open}
        menuItems={notifications}
      />
    </div>
  )
}

export default NotificationBell