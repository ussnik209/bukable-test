import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container, Box, useTheme, Stack } from '@mui/material'

import Header from './header/Header.jsx'
import SideBar from './SideBar/SideBar.jsx'

const Layout = () => {
  const theme = useTheme()
  return (
    <Box sx={{backgroundColor: theme.palette.primary.dark}}>
      <Header></Header>
      <Container maxWidth='1440px'>
        <Stack direction='row'>
          <SideBar></SideBar>
          <Container maxWidth='md' className='content'>
            {/* <Outlet /> */}
            content
          </Container>
        </Stack>
      </Container>
    </Box>
)
}

export default Layout