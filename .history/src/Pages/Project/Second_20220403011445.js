import React from 'react'
import image1 from '../../Images/Image 1.svg'
import image2 from '../../Images/Image 2.svg'
import image3 from '../../Images/Image 3.svg'
import image4 from '../../Images/Image 4.svg'
import image5 from '../../Images/Image 5.svg'
import image6 from '../../Images/Image 6.svg'
import image7 from '../../Images/Image 7.svg'
import image8 from '../../Images/Image 8.svg'
import image9 from '../../Images/Image 9.svg'
import image10 from '../../Images/Image 10.svg'
import image11 from '../../Images/Image 11.svg'
import paintwo from '../../Images/Image 12.svg'
import personatwo from '../../Images/Image 14.svg'
import journeytwo from '../../Images/Image 18.svg'
import ideatwo1 from '../../Images/Image 15.svg'
import ideatwo2 from '../../Images/Image 19.svg'
import ideatwo3 from '../../Images/Image 20.svg'
import group from '../../Images/Group 28.svg'
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
                <p>I created a journey map for Mr. Collins having to find schools and visit 
                    just to enquire and considering he closes work at dawn and almost all 
                    schools are open during the day would raise a lot of pain points</p>
                <div className='map-card card'>
                    <img alt="Joureny Map" src={journeytwo} />
                </div>
            </div>
        </section>
        <section>
            <div style={{width: "72%"}}>
                <h2>Ideation</h2>
                <div className='idea-card card'>
                    <img alt="first ideation" src={ideatwo1}/>
                    <img alt="second ideation" src={ideatwo2}/>
                    <img alt="second ideation" src={ideatwo3}/>
                </div>
                <p>The idea behind each iteration is to have a very simplified display and 
                    direct the user towards the one sequential path to the user flow. 
                    The main action and the only one to take is to find schools
                </p>
            </div>
        </section>
        <section>
            <div>
                <h2>Wireframes, Prototypes and Usabiity Testing</h2>
                <div className='card'>
                    <img alt="Wireframes" src={image6}></img>
                </div>
                <a href='https://www.figma.com/proto/v87pdvLkd26tzTnsSGo3Jb/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1
                &starting-point-node-id=1%3A2&show-proto-sidebar=1'>Low Fidelity Prototype: </a>
                <div className='card'>
                    <img alt="Low Fidelity Prototype" src={image7}></img>
                </div>
                <h3>Findings</h3>
                <img alt="Findings" src={image8}></img>
            </div>
        </section>
        <section>
            <div>
                <h2>Mockup</h2>
                <div className='card'>
                    <img alt="High Fidelity Prototype" src={image10}></img>
                </div>
                    <a href='https://www.figma.com/proto/v87pdvLkd26tzTnsSGo3Jb/Low-Fidelity-Prototype-for-trailer-browsing-app?page-id=262%3A112&
                    node-id=262%3A113&viewport=241%2C48%2C0.35&scaling=min-zoom&starting-point-node-id=262%3A113'>High Fidelity Prototype:</a>
                    <div className='card'>
                        <img alt="Mockup" src={image9}/>
                    </div>
            </div>
        </section>
        <section className='finish'>
            <div className='finish-line'>
                <div className='dark-cover'/>
                <div className='finish-text'>
                    <h2>Product Solution</h2>
                    <p>The final high-fidelity prototype with the cleaner main user flows for finding a trailer, watching and saving it for later. </p>
                </div>
            </div>
            <div className='display'>
                <img alt="Final design" src={image11}/>
            </div>
        </section>
        <section>
            <div>
                <h2>Features</h2>
                <img alt="features" src={group}/>
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