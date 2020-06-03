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
        <h1 className='title'>Stay Home | Save Lives</h1>
        <p className='content'>Find out more on how to keep yourself and your family safe</p>
      </LazyHero>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification">
                <p className="title">
                  Block 1: Who we are.</p>

                {/* <p className="subtitle">{article.hasPart[0].description}</p> */}

              </article>
              <article className="tile is-child notification">
                <p className="title">Testing</p>
                {/* <p className="sub-title"> {article.mainEntityOfPage[1] && article.mainEntityOfPage[1].text}</p> */}
                {/* <p className="sub-title"> {article[1]. && article.mainEntityOfPage[1].text}</p> */}
                
                {/* <p>{article.mainEntityOfPage[0].mainEntityOfPage.text && article.mainEntityOfPage[0].mainEntityOfPage.text}</p> */}
                
                {/* <p>
                  {article.mainEntityOfpage[0].mainEntityOfPage[0] && article.mainEntityOfPage[0].mainEntityOfPage[0].map((info, i)=> {
                    return <p key={i}>{info.text}</p> 
                  }
                  )}
                </p> */}

                {/* <p>
                  {article.mainEntityOfPage[1] && article.mainEntityOfPage[1].map((info, i)=> {
                    return <p key={i}>{info.text}</p> 
                  }
                  )}
                </p> */}

                <p className="title">Where can I find more information?</p>
                {/* <p className="sub-title">{article.name}</p> */}
                <p className="sub-title">{article.description}</p>
                <p>For more information, please check out our</p><a href={article.url} target="_blank" rel="noreferrer">NHS Resources here</a>
                {/* <p className="subtitle">{article.about}</p> */}
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">
                  The Importance Of Selfcare
                </p>
                <div className="content">
                  <p className="sub-title"> {article.hasPart && article.hasPart[3].text.replace(/<[^>]*>/g, ' ')}</p>
                  <p className="sub-title"> <a href={article.hasPart && article.hasPart[3].url} target="_blank" rel="noreferrer">Find out more on Selfcare</a></p>
                </div>

                <figure className="image is-4by7">
                  <img src="https://i.imgur.com/KbkSHZJ.jpg" />
                </figure>
              </article>
            </div>
          </div>
         
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <p className="title">Symptoms</p>

              {/* //trying to access the second haspart object */}
              <div className="content">
              
                {/* <p className="sub-title">{article.hasPart && article.hasPart[1].description}</p> */}
                <p className="subtitle">{article.hasPart && article.hasPart[1].text.replace(/<[^>]*>/g, ' ')}</p>
                <p a href={article.hasPart && article.hasPart[1].url} target="_blank" rel="noreferrer">More info here</p>

              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">What is Corona?</p>
              <p className="sub-title">{article.headline}</p>
              {/* <p className="subtitle">{article.description}</p> */}
              <div className="content">
                {article.text}

                <p>
                  {article.itemListElement && article.itemListElement.map((info, i)=> {
                    return <p key={i}>{info.name}</p> 
                  }
                  )}
                </p>


                <p>
                  {article.hasPart && article.hasPart.map((info, i)=> {
                    return <p key={i}>{info.description}</p> 
                  }
                  )}
                </p>


                {/* full article works more information on covid: */}
                {/* <p>
                  {article.hasPart && article.hasPart.map((info, i)=> {
                    return <p key={i}>{info.text.replace(/<[^>]*>/g, '')}</p> 
                  }
                  )}
                </p> */}
                
                <p className="title">Treatments</p>
                {/* <p className="sub-title"> {article.hasPart && article.hasPart[4].description}</p> */}
                <p className="sub-title"> {article.hasPart && article.hasPart[4].text.replace(/<[^>]*>/g, ' ')}</p>
                <p className="title">Prevention</p>
                <p className="sub-title"> {article.hasPart && article.hasPart[5].description.replace(/<[^>]*>/g, ' ')}</p>
                <p className="sub-title"> {article.hasPart && article.hasPart[5].text.replace(/<[^>]*>/g, ' ')}</p>
                <p>NHS guidelines for more information, on prevention </p><a href={article.hasPart && article.hasPart[5].url} target="_blank" rel="noreferrer">here</a>


              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  )
}



// export default About 