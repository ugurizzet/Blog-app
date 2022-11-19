import React from 'react'
import Logo from '../img/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to='/?cat=html'><h6>Html</h6></Link>
          <Link className='link' to='/?cat=react'><h6>React</h6></Link>
          <Link className='link' to='/?cat=css'><h6>Css</h6></Link>
          <Link className='link' to='/?cat=javascript'><h6>JavaScript</h6></Link>
          <Link className='link' to='/?cat=other'><h6>Other</h6></Link>
          <span>Name</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to='write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
