import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import clsx from 'clsx' 
import { makeStyles } from '@material-ui/core/styles' 
import Drawer from '@material-ui/core/Drawer' 
import Box from '@material-ui/core/Box' 
import Divider from '@material-ui/core/Divider' 
import IconButton from '@material-ui/core/IconButton' 
import Container from '@material-ui/core/Container' 
import Grid from '@material-ui/core/Grid' 
import Paper from '@material-ui/core/Paper' 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight' 
import ListItems from './ListItems' 
import MedicalHistory from './MedicalHistory' 
import Auth from '../lib/auth'
import axios from 'axios'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Picker from './Picker'




const drawerWidth = 240 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: '#faf6ef'
  },
  container: {
    marginLeft: '40px',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: '80%'
  },
  fixedHeight: {
    height: 240
  }

})) 




export default function Dashboard() {
  const classes = useStyles()
  
  const [singleUser, setSingleUser] = useState({})
  const [open, setOpen] = useState(false) 
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight) 
  const handleDrawer = () => {
    return open ? setOpen(false) : setOpen(true)
  } 
 

  useEffect(() => {
    axios.get(`/api/user/${Auth.getUser().id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setSingleUser(res.data))
      .catch(err => console.log(err))
  }, [])

  

  const start = singleUser.appointment && singleUser.appointment.length - 4
  const end = singleUser.appointment && singleUser.appointment.length - 1




  if (!singleUser.appointment) return <h1>Loading...</h1>

  return (
    <div className={classes.root}>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >

        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => handleDrawer()}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <ListItems open={open}/>
        <Divider />

      </Drawer>


      <main className={classes.content}>
      
        <Container maxWidth="lg" className={classes.container}>
          <h1 className='dashboardTitle'>Hello, {singleUser.username}</h1>
          
          <Grid container spacing={3}>
      
            <Box margin={1.5}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Picker 
                  url={'/api/appointment'}
                />
              </MuiPickersUtilsProvider> 
            </Box>

            <Grid item xs={12} md={4} lg={5}>
              <Paper className={fixedHeightPaper}>
                <h1 className='title'>Most recent appointments </h1>
                {singleUser.appointment.length === 0 ? <p className='content'>No Appointment Booked</p> :
                  singleUser.appointment.length <= 3 ? 
                    <div>
                      {singleUser.appointment.map((info, i) => {
                        return <p className='content' key={i}>
                          {info.date} with {info.doctor}
                        </p>
                      })}
                    </div> :
                    <div>{singleUser.appointment.slice(start, end).map((info, i) => {
                      return <p className='content' key={i}>
                        {info.date} with {info.doctor}
                      </p>
                    })}</div>
                }
              </Paper>
            </Grid>
          
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {!singleUser.history.length === 0 ? <MedicalHistory singleUser={singleUser} /> : <h1 className='title'>No Medical History</h1>}
              </Paper>
            </Grid>

          </Grid>

          
          <Box mt={18}>
            <div>Copyright © <Link target='blank' className='links' to="https://github.com/soniacweb/bookdoctor">bookdoctors.com</Link>{' '}{new Date().getFullYear()}</div>
          </Box>

        </Container>
      </main>


    </div>
  ) 
}