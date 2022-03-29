import React from 'react'
import "../Pages.css"

function Splash() {
  return (
    <div style={{height: "100%"}}>
        <div className='details'>
            <h0>Emmanuel Kudom-Agyemang</h0>
            <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
                <h3 style={{color: "#ffffff"}}>An imaginative UX Designer</h3>
                <h3>.</h3>
                <h3 style={{color: "#ffffff"}}>A curious problem solving trying to make an impact</h3>
            </div>
            <div className='links'>
                <a>DESIGNS</a>
                <a>ABOUT</a>
                <a>CONTACT</a>
            </div>
        </div>
        <div className='splash'/>
    </div>
  )
}

export default Splash