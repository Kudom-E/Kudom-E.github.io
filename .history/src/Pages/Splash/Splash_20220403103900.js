import React from 'react'
import "../Pages.css"

function Splash() {
  return (
    <div style={{height: "100%"}}>
        <div className='details'>
            <h1>Emmanuel Kudom-Agyemang</h1>
            <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
                <h3 style={{color: "#ffffff"}}>An imaginative UX Designer</h3>
                <h3>.</h3>
                <h3 style={{color: "#ffffff"}}>A curious problem solving trying to make an impact</h3>
            </div>
            <div className='links'>
                <a href="/#/designs">DESIGNS</a>
                <p>.</p>
                <a href="/#/about">ABOUT</a>
                {/* check later <p>.</p>
                <a href="/#/contact">CONTACT</a> */}
            </div>
        </div>
        <div className='splash'>
            <div className='cover'/>
        </div>
    </div>
  )
}

export default Splash