import React from 'react'

import {Box, IconButton} from '@mui/material'

const NotificationIconPath = '../../../assets/img/Notification.png'

const NotificationButton = () => (
  <IconButton>
    <Box sx={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: 'url(../../../assets/img/Notification.png)',
      width: '25px',
      height: '25px'
    }}></Box>
  </IconButton>
)

export default NotificationButton