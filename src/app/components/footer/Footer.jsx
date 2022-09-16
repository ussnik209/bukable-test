import React from 'react'

import {Stack, Link, IconButton, Typography, SvgIcon} from '@mui/material'

import AppleLogo from '../../../assets/svg/apple.svg'
import PlaystoreLogo from '../../../assets/svg/playstore.svg'

const Footer = () => {
  const links = [
    'About',
    'Privacy',
    'Support',
    'More'
  ]

  return (
    <footer>
      <Stack direction='row' spacing='8px' sx={{mb: '15px'}}>
        {links.map((linkLabel, index) => 
          <Link key={index} href='#' className='link'>{linkLabel}</Link>
        )}
      </Stack>
      <Stack direction='row' spacing='6px'>
        <Typography className='simpleText simpleText__small'>Coming Soon</Typography>
        <IconButton className='iconButton__social'>
          <SvgIcon viewBox='0 0 16 16' component={AppleLogo}></SvgIcon>
        </IconButton>
        <IconButton className='iconButton__social'>
          <SvgIcon viewBox={'0 -1 13 18'}  component={PlaystoreLogo}></SvgIcon>
        </IconButton>
      </Stack>
      <Typography className='simpleText simpleText__small'>© 2022 Bukable, Inc.</Typography>
    </footer> 
  )
}

export default Footer