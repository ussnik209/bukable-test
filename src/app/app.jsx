import React from 'react'

import Routes from './routes/Routes.jsx'

import { ThemeProvider } from '@mui/material'

import Layout from './components/Layout.jsx'
import theme from './theme/mainTheme.js'

const BukablePage = () => (
    <ThemeProvider theme={theme}>
        {/* <Routes /> */}
        <Layout />
    </ThemeProvider>
)

export default BukablePage