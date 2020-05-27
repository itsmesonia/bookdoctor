// import 'date-fns'
// import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import DateFnsUtils from '@date-io/date-fns'
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker
// } from '@material-ui/pickers'

// import SelectDoc from './SelectDoc'
// import AppointmentComment from './AppointmentComment'

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

//   const handleChange = (date) => {
//     setSelectedDate(date)
//   }

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justify="space-around">
//         {/* <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date'
//           }}
//         />   */}

//         <SelectDoc />

//         <KeyboardDatePicker
//           required
//           fullWidth
//           margin= "dense"
//           id="date-picker-dialog"
//           label="Date picker dialog"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={(e) => handleChange(e)}
//           KeyboardButtonProps={{
//             'aria-label': 'change date'
//           }}
//         />
//         <KeyboardTimePicker
//           required
//           fullWidth
//           margin="dense"
//           id="time-picker"
//           label="Time picker"
//           value={selectedDate}
//           onChange={(e) => handleChange(e)}
//           KeyboardButtonProps={{
//             'aria-label': 'change time'
//           }}
//         />

//         <AppointmentComment />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   )
// }
