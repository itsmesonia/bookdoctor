import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
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
  // const [age, setAge] = React.useState('')

  // const handleChange = (event) => {
  //   setAge(event.target.value)
  // }

  return (
    <div>
      <FormControl className={classes.formControl}></FormControl>
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
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={10}>Doctor1</MenuItem>
          <MenuItem value={20}>Doctor2</MenuItem>
          <MenuItem value={30}>Doctor3</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
