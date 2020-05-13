import { useState, useEffect } from 'react'
import axios from 'axios'

export function useAPIDataFromServer(api) {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios(
      api
    ).then(result => {
      setData(result.data)
    })
  }, [api])
  return data
}
