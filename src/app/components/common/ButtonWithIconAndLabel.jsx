import React from 'react'

import { Button } from '@mui/material'

const ButtonWithIconAndLabel = ({icon, children, sx, className}) => (
  <Button startIcon={icon} className={className} sx={
    sx   
  }> 
    {children}
  </Button>
)

export default ButtonWithIconAndLabel