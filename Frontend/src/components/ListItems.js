import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import ListSubheader from '@material-ui/core/ListSubheader'
import HomeIcon from '@material-ui/icons/Home'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Avatar from './Avatar'

import Auth from '../lib/auth'



export default function ListItems({ open }) {

  function handleLogout() {
    Auth.logOut()
  }


  return (
    <div>
      <div className='flexBox'>
        <Avatar />
        {open ? <h1>Hello, {`${Auth.getUser().username}`}</h1> : null}
      </div>


      <ListItem button>
        <Link to={'/'}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </Link>
        <Link to={'/'}>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
    
      <ListItem button>
        <Link to={'/appointment'}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
        </Link>
        <Link to={'/appointment'}>
          <ListItemText primary="Book Appointment"/> 
        </Link>
      </ListItem>
    
      <ListItem button>
        <a href='/' onClick={() => handleLogout()}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
        </a>
        <a href='/' onClick={() => handleLogout()}>
          <ListItemText primary="Log Out"/> 
        </a>
      </ListItem>
    </div>
  )

} 

