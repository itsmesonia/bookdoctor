import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'  
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker } from '@material-ui/pickers'
import SelectDoc from './SelectDoc'
import axios from 'axios'
import Auth from '../lib/auth'
import Picker from './Picker'




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#7C2855'
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
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



  if (error) {
    alert(error.message)
    window.location.reload()
  }  


  return (

    <Grid container className={classes.root}>
      <CssBaseline />

      {Auth.isAuthenticated() ? <div className='bookPage'>
        <Grid  item xs={6} sm={8} md={5} elevation={6} square="true">

          

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Picker 
              url={`/api/appointment/doc/${data.doctor ? data.doctor : null}`}
            />
          </MuiPickersUtilsProvider>

        </Grid>
        

        <Grid item xs={6} sm={8} md={5} elevation={6} square="true">

          <div className={classes.paper}>
            <Avatar className={classes.avatar}><AssignmentIndIcon /></Avatar>
            
            <h1 className='formTitle'>Book your Appointment</h1>
            <p className='calendarTitle'>Select Your Doctor and Check Their Available Time</p>
            
            <form
              className='formStyle'
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

            <div>Copyright © <Link target='blank' className='links' to="https://github.com/soniacweb/bookdoctor">bookdoctors.com</Link>{' '}{new Date().getFullYear()}</div>

          </div>


        </Grid>

      </div> : 
      
        <div className='bookPageFlex'>
          <p className='bookPageLogin'>Please Click Here to Login</p>
          <Link to='/login' className='button'>Login</Link>
        </div>
      }

    </Grid>
        
    
  )
}
