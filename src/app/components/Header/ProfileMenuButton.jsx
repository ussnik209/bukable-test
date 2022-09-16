import React from 'react'

import {
  Box, 
  Tooltip, 
  Button,
  Stack,
  Avatar
} from '@mui/material'

const ProfileMenuButton = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open menu">
        <Button onClick={handleOpenUserMenu} 
          sx={{
            border: '1px solid white',
            borderRadius: '5px'
          }}
        >
          <Stack spacing={1} direction='row' alignItems='center'>  
            <Box className='round'
              sx={{ 
                p: '2px', 
                border: '1px white solid',
                maxWidth: '30px',
                maxHeight: '30px'
              }}
            >
              <Avatar alt="Avatar" src="./assets/img/avatar.png" 
                sx={{height: '100%', width: '100%'}}
              />
            </Box>
            <Box
              sx={{
                height: '7px',
                width: '12px',
                backgroundImage: 'url(./assets/img/more.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
              />
            </Stack>
        </Button>  
      </Tooltip>
    </Box>
  )
}

export default ProfileMenuButton