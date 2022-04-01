import React from 'react'
import * as IconF from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div>
            <a href='https://www.linkedin.com/in/emmanuel-kudom-agyemang-b93a4117a/'><IconF.FaLinkedinIn className='f-icon'/></a>
            <a href='https://www.behance.net/emmanuelk1'><IconF.FaBehance className='f-icon'/></a>
            <a href='https://github.com/Kudom-E'><IconF.FaGithub className='f-icon'/></a>
            <a href='mailto:emmanuekudomagyemang@gmail.com'><IconF.FaEnvelope className='f-icon'/></a>
        </div>
    </footer>
  )
}

export default Footer