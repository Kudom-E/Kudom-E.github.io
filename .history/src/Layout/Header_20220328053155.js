import React from 'react'
import "./Layout.css"
import Logo from '../Logo.svg'


function Header() {
  return (
    <header>
        <nav>
            <ul>
                <a href="/designs">Designs</a>
            </ul>
        </nav>
        <div>
            <img className="logo" src={Logo} alt="logo"></img>
        </div>
        <nav>
            <ul>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </ul>
        </nav>
    </header>
  )
}

export default Header