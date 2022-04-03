import React from 'react'
import paintwo from '../../Images/Image 12.svg'
import personatwo from '../../Images/Image 14.svg'
import journeytwo from '../../Images/Image 18.svg'
import ideatwo1 from '../../Images/Image 15.svg'
import ideatwo2 from '../../Images/Image 19.svg'
import ideatwo3 from '../../Images/Image 20.svg'
import sitemaptwo from '../../Images/Image 21.svg'
import wiretwo1 from '../../Images/Image 22.svg'
import wiretwo2 from '../../Images/Image 25.svg'
import wiretwo3 from '../../Images/Image 23.svg'
import findings2 from '../../Images/Image 24.svg'
import mocktwo1 from '../../Images/Image 26.svg'
import mocktwo2 from '../../Images/Image 27.svg'
import mocktwo3 from '../../Images/Image 30.svg'
import hifi2 from '../../Images/Image 32.svg'
import final from '../../Images/Group 31.svg'
import feature from '../../Images/Group 34.svg'
import impact from '../../Images/Image 37.svg'
import image16 from '../../Images/Image 16.svg'

function Second() {
  return (
    <div className='project'>
        <section className='top'>
            <h1>School Finder Website Design</h1>
            <p className='sub'>UX Research | UX  Design | Prototypes | 2022</p>
            <p className='intro'>This was the second project for my Google UX Design Course. The title was "Design a responsive website for finding Schools". 
                I completed this project over the course of 4 weeks, designing and prototyping the web app, and I learned that a beautiful UI does not make a great UX.
            </p>
            <p className='sub-intro'>Tools used: Adobe XD, pen and paper</p>
        </section>
        <section className='goals'>
            <div>
                <h2>Introduction</h2>
                <p>The project was my second in the UX Design Course, and
                I selected this from the list of others because I have transfered
                to many Schools because my family kept moving from neighborhoods
                , so I could empathize with this being a problem. 
                Everytime I had to move to a new school, we had to learn home and
                go searching for a school. We were lucky if a friend or neighbor 
                recommended one for us</p>
            </div>
            <div>
                <h2>Why a School Finder Website?</h2>
                <p>This webiste is supposed to making finding schools that meet a users
                    needs and resources not only possible but easy. The initial thinking 
                was to make it easy and fast to find schools, allowing different search 
                methods and providing information regarding the searched school. So
                a sort of search engine but for schools</p>
            </div>
        </section>
        <section>
            <div style={{width: "60%"}}>
                <h2>Research</h2>
                <p>I built a research plan with the goal of understanding user-difficulty 
                    in finding schools, especially ones that match their requirements. 
                    I conducted interviews and created a user journey map to understand and 
                    empathize more with my users.</p>
            </div>
            <div>
                <h3>RESEARCH GOAlS</h3>
                <div className='goal-card card'>
                    <h2>Understanding user-difficulty in finding schools meeting their specifications.</h2>
                </div>
            </div>
            <div>
                <h3>USER PAIN POINTS</h3>
                <div className='card'>
                    <img alt="Pain points" src={paintwo}/>
                </div>
            </div>
            <div>
                <h3>PERSONA</h3>
                <div className='card'>
                    <img alt="Persona" src={personatwo}/>
                </div>
            </div>
            <div>
                <h3>PROBLEM STATEMENT</h3>
                <div className='problem-card card'>
                    <h2>John Collins is a night guard at the ministry of communication who needs an 
                        easy method to find an affordable high school that has an elementary part 
                        because his son is supposed to be moving to a high school and he does not 
                        want to worry about finding a school for his daughter when she graduates 
                        elementary. He is asleep during the day, so moving around to find schools 
                        would be difficult</h2>
                </div>
            </div>
            <div>
                <h3>USER JOURNEY MAP</h3>
                <p style={{width: "70vw"}}>I created a journey map for Mr. Collins having to find schools and visit 
                    just to enquire and considering he closes work at dawn and almost all 
                    schools are open during the day would raise a lot of pain points</p>
                <div className='map-card card'>
                    <img alt="Joureny Map" src={journeytwo} />
                </div>
            </div>
        </section>
        <section>
            <div>
                <h2>Ideation</h2>
                <div className='idea-card card' style={{flexWrap: "wrap"}}>
                    <img alt="first ideation" src={ideatwo1}/>
                    <img alt="second ideation" src={ideatwo2}/>
                    <img alt="second ideation" src={ideatwo3}/>
                </div>
                <p style={{width: "60vw"}}>The idea behind each iteration is to have a very simplified display and 
                    direct the user towards the one sequential path to the user flow. 
                    The main action and the only one to take is to find schools
                </p>
            </div>
        </section>
        <section>
            <div>
                <h3>SITEMAP</h3>
                <p style={{width: "70vw"}}>I decided to make this the most simple for users. 
                A sequential sitemap will keep users on the flow without them getting confused 
                or lost as to what to do next
                </p>
                <div className='map-card card'>
                    <img alt="SiteMap" src={sitemaptwo} />
                </div>
            </div>
        </section>
        <section>
            <div>
                <h2>Wireframes, Prototypes and Usabiity Testing</h2>
                <div className='card'>
                    <img alt="Wireframes 1" src={wiretwo1}></img>
                </div>
                <div className='card'>
                    <img alt="Wireframes 2" src={wiretwo2}></img>
                </div>
                <p>Low Fidelity Prototype: </p>
                <div className='card'>
                    <img alt="Low Fidelity Prototype" src={wiretwo3}></img>
                </div>
                <h3>Findings</h3>
                <img alt="Findings" src={findings2}></img>
            </div>
        </section>
        <section>
            <div>
                <h2>Mockup</h2>
                <div className='card'>
                    <img alt="High Fidelity Prototype 1" src={mocktwo1}></img>
                </div>
                <div className='card'>
                    <img alt="High Fidelity Prototype 2" src={mocktwo2}></img>
                </div>
                    <p>High Fidelity Prototype:</p>
                    <div className='card'>
                        <img alt="Mockup" src={hifi2}/>
                    </div>
            </div>
        </section>
        <section className='finish'>
            <div className='finish-line'>
                <div className='dark-cover'/>
                <div className='finish-text'>
                    <h2>Product Solution</h2>
                    <p>The final high-fidelity prototype with the cleaner main user flows for finding a school=. </p>
                </div>
            </div>
            <div className='display'>
                <img alt="Final design" src={final}/>
            </div>
        </section>
        <section>
            <div>
                <h2>Features</h2>
                <img alt="features" src={feature}/>
            </div>
        </section>
        <section>
            <div>
                <h2>Take Aways</h2>
                <img alt="takeaway" src={image16}/>
            </div>
        </section>
    </div>
  )
}

export default Second