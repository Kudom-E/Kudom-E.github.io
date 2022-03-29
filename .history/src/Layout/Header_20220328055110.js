import React from 'react'
import "./Layout.css"
import Logo from '../Logo.svg'
import { NavLink, withRouter } from 'react-router-dom'


function Header() {
  return (
    <header>
        <nav>
            <ul>
                <NavLink to="/designs" activeStyle={{color: "#0A7064", opacity: "1"}}>Designs</NavLink>
            </ul>
        </nav>
        <div>
            <a href="/">
                <img className="logo" src={Logo} alt="logo"/>
            </a>
        </div>
        <nav>
            <ul>
                <NavLink to='/about' activeStyle={{color: "#0A7064", opacity: "1"}}>About</NavLink>
                <NavLink to='/contact' activeStyle={{color: "#0A7064", opacity: "1"}}>Contact</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default withRouter(Header);