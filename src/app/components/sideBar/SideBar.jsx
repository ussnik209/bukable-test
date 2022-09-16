import React from 'react'

import {Stack, useTheme, SvgIcon, Container} from '@mui/material'

import ButtonWithIconAndLabel from '../common/ButtonWithIconAndLabel.jsx'
import CreateIcon from '../../../assets/svg/Edit-Square.svg'
import SearchIcon from '../../../assets/svg/Search.svg'
import TicketStar from '../../../assets/svg/Ticket-Star.svg'
import Chat from '../../../assets/svg/Chat.svg'
import Home from '../../../assets/svg/Home.svg'

const SideBar = () => {
  const viewBox = '0 0 -3 18'
  const navigationElements = [
    {
      label: 'Talents',
      icon: SearchIcon
    },
    {
      label: 'Offers',
      icon: TicketStar
    },
    {
      label: 'Messenger',
      icon: Chat
    },
    {
      label: 'Page',
      icon: Home
    }
  ]

  const theme = useTheme()
  return (
    <Stack spacing='37px' sx={{
      padding: '10px 0',
      width: '150px',
      boxSizing: 'content-box'
    }}>
      <ButtonWithIconAndLabel icon={
        <SvgIcon viewBox={viewBox} component={CreateIcon} />
        }
        sx={[{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          ml: '13px',
          borderRadius: '15px',
          maxWidth: '98px' 
        },
        {
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark
          }
        }
        ]}
        className='button'
      >
        Create
      </ButtonWithIconAndLabel>
      <Stack spacing='30px'>
        <ButtonWithIconAndLabel icon={<SvgIcon viewBox={viewBox} component={SearchIcon} />}
          className='button navButton selectedNavButton'
        >
          Talents
        </ButtonWithIconAndLabel>
        {
          navigationElements.slice(1).map(((navItem, index) => 
            <ButtonWithIconAndLabel key={index} icon={<SvgIcon viewBox={viewBox} component={navItem.icon} />}
              className='button navButton'
            >
              {navItem.label}
            </ButtonWithIconAndLabel>
          ))}
        
      </Stack>
    </Stack>
  )
}

export default SideBar