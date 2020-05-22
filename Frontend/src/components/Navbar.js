import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'

const Navbar = () => {

  const [navClassName, setNavClassName] = React.useState('navbar-menu')

  const clickBurger = () => {
    if (navClassName === 'navbar-menu') {
      setNavClassName('navbar-menu is-active')
    } else {
      setNavClassName('navbar-menu')
    }
  }

  return (
    <div className="navbar is-transparent">
      {/* <div className="container"> */}
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img className="logo" src=''/></Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarExampleTransparentExample" onClick={clickBurger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>
      <div className="navbar-menu is-active">
        <div id="navbarExampleTransparentExample" className={navClassName}>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link className='white' to={'/'}>Home</Link>
            </div>
            <div className="navbar-item">
              <Link className='white' to={'/about'}>About</Link>
            </div>
            <div className="navbar-item">
              <Link className='white' to={'/login'}>Login</Link>
            </div>
            <div className="navbar-item">
              <Link className='white' to={'/register'}>Register</Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Navbar


