import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom' 
import Avatar from '@material-ui/core/Avatar'  
import CssBaseline from '@material-ui/core/CssBaseline'  
import TextField from '@material-ui/core/TextField'   
import Box from '@material-ui/core/Box'  
import Grid from '@material-ui/core/Grid'  
import AssignmentIcon from '@material-ui/icons/Assignment'  
import { makeStyles } from '@material-ui/core/styles'  

import axios from 'axios'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/800/cached.offlinehbpl.hbpl.co.uk/news/PGH/NHS_sign_iStock-20170428030700941.jpg)',
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

export default function Register(props) {


  const classes = useStyles()  
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [errors, setErrors] = useState('')


  function handleChange(e) {
    e.persist()
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value })
    // setErrors({ ...errors, [e.target.name]: '' })
  }




  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/register', registerInfo)
      .then(() => {
        if (errors === '') {
          props.history.push('/login')
        }
      })
      .catch(err => {
        setErrors( { ...errors, ...err.response.data.errors } )
      })
  }




  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} elevation={6} square='true'>
        <div className={classes.paper}>

          <Avatar className={classes.avatar}>
            <AssignmentIcon /> 
          </Avatar>
          
          <h1>Sign Up</h1>

          <form className='formStyle' onSubmit={(e) => handleSubmit(e)}>
            <TextField
              onChange={(e) => handleChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              id="username"
            />
            <TextField
              onChange={(e) => handleChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => handleChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <TextField
              onChange={(e) => handleChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordConfirmation"
              label="Password Confirmation"
              type="password"
              id="passwordConfirmation"
            />

            <button className='button' >
              Sign In
            </button>

          </form>
            
          <Link to="/login" className='links'>Already have an account? Login</Link>

          <Box mt={5}>
            <div>Copyright © <Link target='blank' className='links' to="https://github.com/soniacweb/bookdoctor">bookdoctors.com</Link>{' '}{new Date().getFullYear()}</div>
          </Box>

        </div>
      </Grid>
    </Grid>
  )  
}