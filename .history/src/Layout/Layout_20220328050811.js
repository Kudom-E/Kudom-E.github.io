import React from 'react'
import Header from './Header'


const Layout = (props) => (
    <div style={{height: "100vh"}}>
        {!props.splash && <Header/>}
        {props.children}
    </div>
);
export default Layout;