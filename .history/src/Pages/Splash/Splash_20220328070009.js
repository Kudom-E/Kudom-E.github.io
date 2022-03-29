import React from 'react'
import "../Pages.css"

function Splash() {
  return (
    <div style={{height: "100%"}}>
        <div className='details'>
            <h9>Emmanuel Kudom-Agyemang</h9>
            <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
                <h3 style={{color: "#ffffff"}}>An imaginative UX Designer</h3>
                <h3>.</h3>
                <h3 style={{color: "#ffffff"}}>A curious problem solving trying to make an impact</h3>
            </div>
            <div className='links'>
                <a>DESIGNS</a>
                <p>a</p>
                <a>ABOUT</a>
                <p>.</p>
                <a>CONTACT</a>
            </div>
        </div>
        <div className='splash'/>
    </div>
  )
}

export default Splash