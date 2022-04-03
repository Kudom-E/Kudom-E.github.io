import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className='home'>
          <h1>
              <strong>UX Designer</strong>, who loves <b>puzzles </b> 
                and <b> simplistic solutions</b>, as well as being 
                <b> a helpful impact.</b>
            </h1>
            <div className='grid-container'>
                <a href="/#/trailer-browsing-project" className=' coursera'>
                  <div className='grid-item c-back'>
                    <h3>Trailer Browsing App</h3>
                  </div>
                </a>
                <a href="/#/responsive-school-website" className=' coursera'>
                  <div className='grid-item c-back'>
                    <h3>Responsive School Website</h3>
                  </div>
                </a>
                <a href="/#/cross-platform-medicine-reminder" className=' coursera'>
                  <div className='grid-item c-back'>
                    <h3>Cross-Platform Medicine Reminder</h3>
                  </div>
                </a>
                <div className='grid-item coursera'/>
            </div>
      </div>
    )
  }
}
export default Home;