import React, { useState, useEffect } from 'react'
import 'bulma'
import axios from 'axios'

export default function AboutStats() {

  const [stat, setStat] = useState('')

  
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary')
      .then(res => setStat(res.data))
  }, []) 
    
  
  console.log(stat)

  return (
    <div>
    
      {/* <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical"> */}
      {/* <article className="tile is-child notification">
        <div className="notification is-info"> */}
      {/* <button className="delete"></button> */}
                
      {/* <p className="title">Live UK Stats</p>  */}
      <p className="sub-title-stats"> {stat.Countries && stat.Countries[176].Country}</p>
      <p className="sub-title-stats"> Confirmed Cases: {stat.Countries && stat.Countries[176].NewConfirmed}</p>
      <p className="sub-title-stats"> Total Confirmed: {stat.Countries && stat.Countries[176].TotalConfirmed}</p>
      <p className="sub-title-stats"> New Death Toll: {stat.Countries && stat.Countries[176].NewDeaths}</p>
      <p className="sub-title-stats"> Cumulative Lives Lost: {stat.Countries && stat.Countries[176].TotalDeaths}</p>
      <p className="sub-title-stats"> Newly Recovered: {stat.Countries && stat.Countries[176].NewRecovered}</p>
      <p className="sub-title-stats"> Total Recovered: {stat.Countries && stat.Countries[176].TotalRecovered}</p>      
     
      <p className="title" id="globalstats">
                 Global Stats</p>

      <p className="sub-title-stats"> Newly Recovered: {stat.Global && stat.Global.NewConfirmed}</p>
      <p className="sub-title-stats"> New Confirmed Cases: {stat.Global && stat.Global.TotalConfirmed}</p>
      <p className="sub-title-stats"> New Death Toll: {stat.Global && stat.Global.NewDeaths}</p>
      <p className="sub-title-stats"> Cumulative Lives Lost Globally: {stat.Global && stat.Global.TotalDeaths}</p>
      <p className="sub-title-stats"> Newly Recovered: {stat.Global && stat.Global.NewRecovered}</p>
      <p className="sub-title-stats"> Total Recovered: {stat.Global && stat.Global.TotalRecovered}</p>

      {/* reversing toISOString()format */}
      <p id="dateupdated" className="sub-title-stats"> Updated as of {stat.Countries && stat.Countries[176].Date.replace(/T.*/,'').split('-').reverse().join('-')}</p> 

                 
    </div>
    //   </article>
    // </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
