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
                <a href="/#/trailer-browsing-project"><div className='grid-item coursera'/></a>
                <div className='grid-item coursera'/>
                <div className='grid-item coursera'/>
                <div className='grid-item kace'/>
            </div>
      </div>
    )
  }
}
export default Home;