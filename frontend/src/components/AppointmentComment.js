import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '40ch'
    }
  }
}))

export default function MultilineTextFields() {
  const classes = useStyles()
  const [value, setValue] = React.useState('Controlled')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" 
      onChange={(e) => handleChange(e)}
    >
      <div>
       
        <TextField
          onChange={(e) => handleChange(e)}
          id="reason"
          label="Reason"
          multiline
          rows={4}
          defaultValue="Why would you like to see the doctor?"
        />
      </div>
     
      <button className='button' >
              Submit
      </button>
    </form>
  )
}
