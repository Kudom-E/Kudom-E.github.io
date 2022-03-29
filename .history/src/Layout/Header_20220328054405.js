import React from 'react'
import "./Layout.css"
import Logo from '../Logo.svg'
import { NavLink, withRouter } from 'react-router-dom'


function Header() {
  return (
    <header>
        <nav>
            <ul>
                <NavLink to="/designs" activeStyle={{color: "#0A7064"}}>Designs</NavLink>
            </ul>
        </nav>
        <div>
            <img className="logo" src={Logo} alt="logo"></img>
        </div>
        <nav>
            <ul>
                <NavLink to='/about' activeStyle={{coloe: "#0A7064"}}>About</NavLink>
                <NavLink to='/contact' activeStyle={{coloe: "#0A7064"}}>Contact</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default withRouter(Header);