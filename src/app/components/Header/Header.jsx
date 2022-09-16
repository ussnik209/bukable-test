import React from 'react'

import { 
  Divider,
  SvgIcon,
  AppBar,
  Container,
  Toolbar,
  Box,
  Stack,
  useTheme
} from '@mui/material'

import Logo from '../../../assets/svg/bukableLogo.svg' 
import ProfileMenuButton from './ProfileMenuButton.jsx'
import NotificationButton from './NotificationButton.jsx'

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // }

  const theme = useTheme()

  return (
    <>
    <AppBar position="static" 
      sx={{
        backgroundColor: `${theme.palette.primary.dark}`,
        padding: '4px 0'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between'}}
        >
          <Box>
            <SvgIcon 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, mr: 1,
                width: '100%'
              }}
              component={Logo}
              inheritViewBox
            />
          </Box>
          <Stack direction='row'>
            <NotificationButton />
            <ProfileMenuButton />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
    <Divider sx={{
      borderColor: 'rgba(255, 255, 255, .1)'
    }}/>
    </>
  )
}

export default Header