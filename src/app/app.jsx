import React from 'react'

import Routes from './routes/Routes.jsx'

import { ThemeProvider } from '@mui/material'

import theme from './theme/mainTheme.js'

const BukablePage = () => (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
)

export default BukablePage