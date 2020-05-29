import React from 'react'
import LazyHero from 'react-lazy-hero'
import Navbar from './Navbar'
import 'bulma'

import axios from 'axios'
// import { Link } from 'react-router-dom'

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      article: {}
    }
  }
  
  componentDidMount() {
    // const key = "{26217b2fd13a473f8ee90f7fbc56cdec}"
    axios.get('https://api.nhs.uk/living-well/', {
      // method: 'GET',
      type: 'GET',
      headers: {
        subscription-key:'{f01b767a2e9e4ed8a2aa639350206fbc}',
        Content-Type: 'application/json'
      }
      // dataType: 'json'
    })
      .then(res => res.json())
      .then(res => this.setState({ article: res.data }))
  }

  
  render() {
    console.log(this.state.article)
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
                  <p className="title">About page.</p>
                  <p className="subtitle">About</p>
                </article>
                <article className="tile is-child notification">
                  <p className="title">...what we do</p>
                  <p className="subtitle">Bottom tile</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <p className="title">Middle tile</p>
                  <p className="subtitle">With an image</p>
                  <figure className="image is-4by7">
                    <img src="https://i.imgur.com/KbkSHZJ.jpg" />
                  </figure>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">Wide tile</p>
                <p className="subtitle">Aligned with the right tile</p>
                <div className="content">
          content
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <div className="content">
                <p className="title">Tall tile</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
          content
                </div>
              </div>
            </article>
          </div>
        </div>

      </div>
    )
  }
}


export default About