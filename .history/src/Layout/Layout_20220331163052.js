import React from 'react'
import Footer from './Footer';
import Header from './Header'


const Layout = (props) => (
    <div style={{height: "100vh"}}>
        {!props.splash && <Header/>}
        {props.children}
        {!props.splash && <Footer/>}
    </div>
);
export default Layout;