import {createTheme} from '@mui/material/styles'

const mainTheme = createTheme({
  palette: {
    primary: {
      light: 'rgba(255, 255, 255, .5)',
      main: '#242526',
      dark: '#000',
      contrastText: '#fff'
    },
    secondary: {
      main: '#9a05eb',
      light: '#dbb2ff',
      contrastText: '#fff'
    }
  }
})
export default mainTheme