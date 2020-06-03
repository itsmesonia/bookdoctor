import React, { useState, useEffect } from 'react'
import LazyHero from 'react-lazy-hero'
import Navbar from './Navbar'
import 'bulma'

import axios from 'axios'
// import { Link } from 'react-router-dom'

export default function About() {

  const [article, setArticle] = useState('')

  
  useEffect(() => {
    axios.get('https://api.nhs.uk/conditions/coronavirus-covid-19?url=bookdoctorsappointments.com&modules=false')
      .then(res => setArticle(res.data))
  }, []) 
    
  
  console.log(article)

  return (
    <div>
      <Navbar />
      <LazyHero
        imageSrc="https://i.imgur.com/LcwSFCg.jpg" 
        parallaxOffset={100} 
        opacity={0.6}
        minHeight={'140vh'}
        style={{ overflow: 'hidden' }}>
        <h1 className='title'>Who We Are</h1>
        <p className='content'>Find out more on how to keep yourself and your family safe</p>
      </LazyHero>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification">
                <p className="title">{article.headline}</p>
                {/* <p className="subtitle">{article.hasPart[0].description}</p> */}
              </article>
              <article className="tile is-child notification">
                <p className="title">{article.name}</p>
                <p>For more information, please check out our</p><a href={article.url}>NHS Resources here</a>
                {/* <p className="subtitle">{article.about}</p> */}
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">
                  {/* {state.article.headline} */}
                
                </p>
                {/* <p className="subtitle">{article.name}</p> */}
                <figure className="image is-4by7">
                  <img src="https://i.imgur.com/KbkSHZJ.jpg" />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              {/* <p className="title">{article.name}</p>
              <p className="subtitle">{article.name}</p> */}
              <div className="content">
          content
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">works fine {article.headline}</p>
              <p className="subtitle"> works fine {article.description}</p>
              <div className="content">
                {article.text}
                {/* {article.mainEntityOfPage.mainEntityOfPage[1]}
                {article.mainEntityOfPage.mainEntityOfPage[2]}
                {article.mainEntityOfPage.mainEntityOfPage[3]}
                {article.mainEntityOfPage.mainEntityOfPage[3]} */}


                {/* <ul> { article[0].map((item, index) => (
                  <li key={index.id}>{item.hasPart}</li>)) }
                </ul> */}

                {/* <p> {article.about}</p> */}

                {/* <div> 
                  {article[1].hasPart.map((value, i) => {
                    return <p key={i}>{value}</p>
                  })}
                </div>  */}

                {/* <p>{article[1].hasPart[1]}</p> */}
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  )
}



// export default About 