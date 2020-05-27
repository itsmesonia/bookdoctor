import React, { useState, useEffect }  from 'react'  
import Avatar from '@material-ui/core/Avatar'  
import CssBaseline from '@material-ui/core/CssBaseline'  
import Grid from '@material-ui/core/Grid'  
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'  
import Typography from '@material-ui/core/Typography'  
import { makeStyles } from '@material-ui/core/styles'  
// import AppointmentForm from './AppointmentForm'

import axios from 'axios'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'

import SelectDoc from './SelectDoc'
import AppointmentComment from './AppointmentComment'

 
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))  

//connect frontend and backend
export default function BookApp(props) {
  const classes = useStyles()  

  const [appointmentInfo, setAppointmentInfo] = useState({
    date: '',
    reason: '',
    doctor: ''
  })

  const [errors, setErrors] = useState({
    date: '',
    reason: '',
    doctor: ''
  })


  function handleChange(e) {
    e.persist()
    setAppointmentInfo({ ...appointmentInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/appointment', appointmentInfo)
      .then(() => {
        if (errors.date === '' && errors.reason === '' && errors.doctor === '') {
          props.history.push('/dashboard')
          // props.history.push('/')
          window.location.reload()
          //ask aichi about this line^
        }
      })
      .catch(err => {
        setErrors({ ...errors, ...err.response.data })
      })
  }

  console.log(appointmentInfo)

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Book your Appointment
          </Typography>
          {/* <form className={classes.form} noValidate> */}

          <form className={classes.container} 
            noValidate 
            onSubmit={(e) => handleSubmit(e)}>
            {/* {errors.username && <small>{errors.username.message}</small>} */}

            {/* <AppointmentForm /> */}

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">

                <SelectDoc />

                <KeyboardDatePicker
                  required
                  fullWidth
                  margin= "dense"
                  id="date"
                  label="Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
                <KeyboardTimePicker
                  required
                  fullWidth
                  margin="dense" 
                  id="date"
                  label="Time"
                  value={selectedDate}
                  onChange={(e) => handleChange(e)}
                  KeyboardButtonProps={{
                    'aria-label': 'change time'
                  }}
                />

                <AppointmentComment />
              </Grid>
            </MuiPickersUtilsProvider>
            
            {errors.username && <small>{errors.username.message}</small>}

            {/* form will go in here */}

          </form>

        </div>
      </Grid>
    </Grid>
  )  
}

