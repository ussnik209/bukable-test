import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container, Grid } from '@mui/material'

import Header from './Header/Header.jsx'

const Layout = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Header></Header>
    </Grid>
    <Grid item xs={4}></Grid>
    <Grid item xs={8}>
      <Container maxWidth='md' className='content'>
        {/* <Outlet /> */}
        content
      </Container>
    </Grid>
  </Grid>
)

export default Layout