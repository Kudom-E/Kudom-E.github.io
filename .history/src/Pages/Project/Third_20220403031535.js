import React, { useEffect } from 'react'
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='project'>
        <section className='top'>
            <h1>Medicine Reminder Design</h1>
            <p className='sub'>UX Research | UX  Design | Prototypes | 2022</p>
            <p className='intro'>This was the third project for my Google UX Design Course. The title was "Design a cross-platform tool to help people remember to take medicine on time". 
                I completed this project over the course of 4 weeks, designing and prototyping the web app, and I learned that when designing, the most used device of users is considered and determines the design approach.
            </p>
            <p className='sub-intro'>Tools used: Adobe XD, pen and paper</p>
        </section>
        <section className='goals'>
            <div>
                <h2>Introduction</h2>
                <p>The project was my third in the UX Design Course, and
                I selected this from the list of others because I empathized with the problem
                of forgetting to take medicine on time.</p>
            </div>
            <div>
                <h2>Why a Medicine Reminder App?</h2>
                <p>TDue to busy schedules, exhaustive working hours, plain forgetfulness or 
                even hating medications, people tend to forget when they have to take the 
                medicine even though they are prescribed for specific times. 
                The initial thinking was to create a simple reminder app and a notification of alarm system to alert users
                of the time they have to take some medication</p>
            </div>
        </section>
        <section>
            <div style={{width: "60%"}}>
                <h2>Research</h2>
                <p>I built a research plan with the goal of understanding users easily forget to take their medicine and miss the doctor’s or pharmacist’s prescribed time, 
                    especially the elderly and children, who need assistance in taking medicine. 
                    I conducted interviews and created a competitive audit to understand and 
                    empathize more with my users and my competitiion to see what has already been offered and find opportunities.</p>
            </div>
            <div>
                <h3>RESEARCH GOAlS</h3>
                <div className='goal-card card'>
                    <h2>Understanding conditions that lead to forgeting to take medicines and mitigations.</h2>
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
                <h3>PROBLEM STATEMENT 1</h3>
                <div className='problem-card card'>
                    <h2>Dylan Cage is a college student
                    who needs to finish taking his medications when he falls ill
                    Because he stops taking them when he feels better and his symptoms keep returning.
                    </h2>
                </div>
            </div>
            <div>
                <h3>PERSONA</h3>
                <div className='card'>
                    <img alt="Persona" src={personatwo}/>
                </div>
            </div>
            <div>
                <h3>PROBLEM STATEMENT 2</h3>
                <div className='problem-card card'>
                    <h2>Mary Agyemang is a mother off two and a journalist
                    who needs constant reminder of her medication times 
                    Because she easily loses track of them from her busy life.
                    </h2>
                </div>
            </div>
            <div>
                <h3>COMPETITIVE AUDIT</h3>
                <p style={{width: "70vw"}}>Competitive audit of a few of the 
                medicine reminder competitors provided directions on gaps and opportunities to address</p>
                <div className='map-card card'>
                    <img alt="COMPETITIVE AUDIT" src={journeytwo} />
                </div>
            </div>
        </section>
        <section>
            <div style={{width: "70%"}}>
                <h2>Ideation</h2>
                <div className='idea-card card' style={{flexWrap: "wrap"}}>
                    <img alt="first ideation" src={ideatwo1}/>
                </div>
                <p style={{width: "60vw"}}>I did a quick crazy 8’s ideation exercise to come up with ideas. My focus is simply allowing users to create reminders for more than one medication.

                </p>
            </div>
        </section>
        <section>
            <div>
                <h2>Wireframes, Prototypes and Usabiity Testing</h2>
                <div className='card'>
                    <img alt="Wireframes 1" src={wiretwo1}></img>
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