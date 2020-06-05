import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

export default function DeleteAppointment({ id }) {

  function handleDelete() {
    axios.delete(`/api/appointment/${id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      // .then(() => {
      //   window.location.reload()
      // })
  }




  return (
    <a style={{ margin: '0 20px 20px 20px' }} id='' onClick={() => handleDelete()}><DeleteForeverIcon /></a>
  )
}
