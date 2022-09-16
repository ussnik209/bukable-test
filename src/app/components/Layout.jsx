import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container, Box, useTheme, Stack } from '@mui/material'

import Header from './header/Header.jsx'
import SideBar from './SideBar/SideBar.jsx'
import Footer from './footer/Footer.jsx'


const Layout = () => {
  const theme = useTheme()
  return (
    <Box sx={{backgroundColor: theme.palette.primary.dark}}>
      <Header></Header>
      <Container maxWidth='1440px'>
        <Stack direction='row'>
          <Stack spacing='118px'>
            <SideBar></SideBar>
            <Footer />
          </Stack>
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