import React, { useEffect } from 'react'
import Dylan from '../../Images/Image 38.svg'
import Audit from '../../Images/Image 40.svg'
import Mary from '../../Images/Image 39.svg'
import ideate from '../../Images/Image 41.svg'
import sitemap from '../../Images/Image 50.svg'
import wire from '../../Images/Image 42.svg'
import lofi from "../../Images/Image 43.svg"
import findings from '../../Images/Image 44.svg'
import mock1 from '../../Images/Image 45.svg'
import mock2 from '../../Images/Image 46.svg'
import mock3 from '../../Images/Image 49.svg'
import hifi from '../../Images/Image 47.svg'
import final from '../../Images/Image 48.svg'
import feature from '../../Images/Group 35.svg'
import impact from '../../Images/Image 51.svg'

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
                <h3>PERSONA</h3>
                <div className='card'>
                    <img alt="Persona" src={Dylan}/>
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
                    <img alt="Persona" src={Mary}/>
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
                    <img alt="COMPETITIVE AUDIT" src={Audit} />
                </div>
            </div>
        </section>
        <section>
            <div style={{width: "70%"}}>
                <h2>Ideation</h2>
                <div className='idea-card card' style={{flexWrap: "wrap"}}>
                    <img alt="first ideation" src={ideate}/>
                </div>
                <p style={{width: "60vw"}}>I did a quick crazy 8’s ideation exercise to come up with ideas. My focus is simply allowing users to create reminders for more than one medication.

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
                    <img alt="SiteMap" src={sitemap} />
                </div>
            </div>
        </section>
        <section>
            <div>
                <h2>Wireframes, Prototypes and Usabiity Testing</h2>
                <div className='card'>
                    <img alt="Wireframes 1" src={wire}></img>
                </div>
                <p>Low Fidelity Prototype: </p>
                <div className='card'>
                    <img alt="Low Fidelity Prototype" src={lofi}></img>
                </div>
                <h3>Findings</h3>
                <img alt="Findings" src={findings}></img>
            </div>
        </section>
        <section>
            <div>
                <h2>Mockup</h2>
                <div className='card'>
                    <img alt="High Fidelity Prototype 1" src={mock1}></img>
                </div>
                <div className='card'>
                    <img alt="High Fidelity Prototype 2" src={mock2}></img>
                </div>
                <p>Responsive Web Design</p>
                <div className='card'>
                    <img alt="High Fidelity Prototype 3" src={mock3}></img>
                </div>
                <p>High Fidelity Prototype:</p>
                <div className='card'>
                    <img alt="Mockup" src={hifi}/>
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
                <img alt="takeaway" src={impact}/>
            </div>
        </section>
    </div>
  )
}

export default Second