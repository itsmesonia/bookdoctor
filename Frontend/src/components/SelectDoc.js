import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 450,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function SimpleSelect() {
  const classes = useStyles()

  const [doctor, setDoctor] = useState()

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Name</InputLabel>
        <Select
          // margin="normal"
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          // value={age}
          // onChange={handleChange}
          className={classes.selectEmpty}
        >
          {/* <option aria-label="None" value="" />
                <option value='patient'>Patient</option>
                <option value='doctor'>Doctor</option> */}
        </Select>
      </FormControl>
    </div>
  )
}
