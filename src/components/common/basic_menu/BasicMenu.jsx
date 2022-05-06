import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {menuItems.map((item) => 
        (<MenuItem key={item.id} onClick={handleClose}>{item.label}</MenuItem>)
      )}
    </Menu>
  )
}

export default BasicMenu