import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'  
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker } from '@material-ui/pickers'
import SelectDoc from './SelectDoc'
import axios from 'axios'
import Auth from '../lib/auth'




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))




//connect frontend and backend
export default function BookApp(props) {
  const classes = useStyles()

  const [selectedDate, setSelectedDate] = useState({ date: new Date() })

  const [data, setData] = useState({
    date: selectedDate.date.toLocaleDateString(),
    time: '',
    reason: '',
    doctor: ''
  })

  const [error, setError] = useState('')



  const handleDateChange = (date) => {
    setSelectedDate({ date: date })
    setData({ ...data, date: date.toLocaleDateString() })
  }

  function handleChange(e) {
    e.persist()
    setData({ ...data, [e.target.name]: e.target.value })
  }

  
  const handleSubmit = (e) => {
    if (data.doctor === '' || data.reason === '' || data.time === '') alert('Please fill in all sections')
    e.preventDefault()
    axios
      .post('/api/appointment', data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        if (error === '') {
          props.history.push('/dashboard')
        }
      })
      .catch((err) => setError(err.response.data))
  }


  console.log(data)


  if (error) {
    alert(error.message)
    window.location.reload()
  }  


  return (
    <div className='flexBox'>
      <Grid container className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} elevation={6} square="true">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>
              Book your Appointment
            </h1>

            <form
              className={classes.container}
              noValidate
              onSubmit={(e) => handleSubmit(e)}
            >

              <SelectDoc 
                update={setData}
                data={data}
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                {/* <Grid container justify="space-around"> */}

                <KeyboardDatePicker
                  name='date'
                  required
                  fullWidth
                  margin="dense"
                  id="date"
                  label="Date"
                  format="MM/dd/yyyy"
                  value={selectedDate.date}
                  onChange={(e) => handleDateChange(e)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>

              {/* <KeyboardTimePicker
                    name='date'
                    required
                    fullWidth
                    margin="dense"
                    id="date"
                    label="Time"
                    value={selectedDate}
                    onChange={(e) => handleChange(e)}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  /> */}

              {/* </Grid> */}

              <TextField
                onChange={(e) => handleChange(e)}
                // variant="outlined"
                margin="normal"
                required
                fullWidth
                name="reason"
                label="Reason"
                type="text"
                id="reason"
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />

              <button className='button' >
                Submit
              </button>    

            </form>
          </div>

          <Box mt={5}>
            <div>Copyright © <Link target='blank' className='links' to="https://github.com/soniacweb/bookdoctor">bookdoctors.com</Link>{' '}{new Date().getFullYear()}</div>
          </Box>
        </Grid>
      </Grid>
    </div>
    
  )
}
