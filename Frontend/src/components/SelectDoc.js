import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import axios from 'axios'
import Auth from '../lib/auth'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 450
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#005EB8'
    }
  },
  notchedOutline: {},
  cssFocused: {},
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}))

export default function SimpleSelect({ update, data }) {
  const classes = useStyles()

  const [doctor, setDoctor] = useState()
  const [select, setSelect] = useState()

  useEffect(() => {
    axios.get('/api/doctors', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setDoctor(res.data)
      })
      .catch(err => console.log(err))
  },[])


  function handleChange(e) {
    setSelect({ [e.target.name]: e.target.value })
    update({ ...data, [e.target.name]: e.target.value })
  }



  return (
    <div >
      <FormControl required className={classes.formControl} >
        <InputLabel className='selectedInput'>Doctor</InputLabel>
        <Select
          className='selectInput'
          native
          onChange={(e) => handleChange(e)}
          label='Your GP'
          name='doctor'
        >
          <option aria-label="None" value="" />
          { doctor && doctor.map((doc) => {
            return <option key={doc.id}>
              {doc.username}
            </option>
          })}

        </Select>
      </FormControl>
    </div>
  )
}
