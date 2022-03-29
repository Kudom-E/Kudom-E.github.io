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
// import image2 from '../../Images/Image 2.svg'
// import image2 from '../../Images/Image 2.svg'
// import image2 from '../../Images/Image 2.svg'

function Project() {
  return (
    <div className='project'>
        <section className='top'>
            <h1>Movie Theatre Trailer Browsing App Design</h1>
            <p className='sub'>UX Research | UX  Design | Prototypes | 2021</p>
            <p className='intro'>This project was for my Google UX Design Course. The title was "Design a trailer browsing app for a movie theater". 
                I completed this project over the course of 4 weeks, designing and prototyping the mobile app, and I learned about how biases affect our decision making and 
                the steps we must take to avoid them.
            </p>
            <p className='sub-intro'>Tools used: Figma, pen and paper</p>
        </section>
        <section className='goals'>
            <div>
                <h2>Introduction</h2>
                <p>The project was my first in the UX Design Course, and
                I selected this from the list of others because as a fan
                of movies in general, it had me curious. The apps I knew
                of showed movies in general and did not specialize in 
                just movie trailers. Then creating the problem of some
                movie lovers having difficulty in finding movie trailers
                so they could know what movies are to be released.</p>
            </div>
            <div>
                <h2>Why a Trailer Browsing App?</h2>
                <p>This is a mobile application that allows users to view movie trailers 
                easily and comfortably on their mobile phones. The initial thinking 
                was to make it easy for movie lovers like myself to find movie trailers 
                easily and have access to viewing them on their phones. so the goal
                was to design an app for movie theatres; allowing users to browse
                movie trailers for a movie theatre so users are made aware of the
                movies that would be showing.</p>
            </div>
        </section>
        <section>
            <div>
                <h2>Research</h2>
                <p>I conducted interviews and created empathy maps to understand and empathize more with my users. I gathered pain points from the empathy maps and 
                created personas to represent the users the app was to be designed for.</p>
            </div>
            <div>
                <h3>RESEARCH GOAlS</h3>
                <div className='goal-card card'>
                    <h2>Understanding user-difficulty in finding movie 
                    trailers for a movie theatre.</h2>
                </div>
            </div>
            <div>
                <h3>USER PAIN POINTS</h3>
                <div className='card'>
                    <img alt="Pain points" src={image1}/>
                </div>
            </div>
            <div>
                <h3>PERSONA</h3>
                <div className='card'>
                    <img alt="Persona" src={image2}/>
                </div>
            </div>
            <div>
                <h3>PROBLEM STATEMENT</h3>
                <div className='problem-card card'>
                    <h2>Charles Arthur is a busy doctor at the military hospital who needs an 
                    interactive way to get information and track movies being shown at 
                    the movie theatre because choosing a movie to watch at the 
                    theatre without foreknowledge is quite challenging.</h2>
                </div>
            </div>
            <div>
                <h3>USER JOURNEY MAP</h3>
                <p>Mapping Arthur user journey revealed how helpful it would be for users to have access to the schedule of movies being shown at a movie theatre</p>
                <div className='card'>
                    <img alt="Joureny Map" src={image3} />
                </div>
            </div>
        </section>
        <section>
            <h2>Ideation</h2>
            <div className='idea-card card'>
                <img alt="first ideation" src={image4}/>
                <img alt="second ideation" src={image5}/>
            </div>
            <p>The idea behind each iteration was make trailers easy to access displaying them as components for the home screen with images and hopefully 
            help a user find a trailer without leaving the home page
            </p>
        </section>
        <section>
            <h2>Wireframes, Prototypes and Usabiity Testing</h2>
            <div className='="card'>
                <img alt="Wireframes" src={image6}></img>
            </div>
            <p>Low Fidelity Prototype: 
            https://www.figma.com/proto/v87pdvLkd26tzTnsSGo3Jb/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1
            &starting-point-node-id=1%3A2&show-proto-sidebar=1</p>
            <div className='card'>
                <img alt="Low Fidelity Prototype" src={image7}></img>
            </div>
            <h3>Findings</h3>
            <img alt="Findings" src={image8}></img>
        </section>
        <section>
            <h2>Mockup</h2>
            <img alt="Mockup" src={image9}/>
            <p>High Fidelity Prototypes:
            https://www.figma.com/proto/v87pdvLkd26tzTnsSGo3Jb/Low-Fidelity-Prototype-for-trailer-browsing-app?page-id=262%3A112&
            node-id=262%3A113&viewport=241%2C48%2C0.35&scaling=min-zoom&starting-point-node-id=262%3A113</p>
            <div className='card'>
                <img alt="High Fidelity Prototype" src={image10}></img>
            </div>
        </section>
        <section className='finish'>
            <div className='finish-line'></div>
            <div className='display'></div>
        </section>
        <section>
            <h2>Features</h2>
        </section>
    </div>
  )
}

export default Project