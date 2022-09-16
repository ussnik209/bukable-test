import React from 'react'

import {SvgIcon, IconButton} from '@mui/material'

import NotificationIcon from '../../../assets/svg/Notification.svg'

const NotificationButton = () => (
  <IconButton className='iconButton'>
    <SvgIcon viewBox={'0 0 17 20'}  component={NotificationIcon}></SvgIcon>
  </IconButton>
)

export default NotificationButton