import React from 'react'
import "./About.css"
import vineet from "../../assets/vineet.jpeg";
import ridam from "../../assets/ridam.jpeg";
import mukul from "../../assets/mukul.jpeg";
function About() {
    return (
        <div className='about__wrapper'>
            <h1>About Us</h1>
            <br />
            <p>
                Open-source software is generally a GitHub repository which are valuable
                resources that contributors maintain, enriching the open source resource
                pool. Although these are fantastic pieces of code, as the number of
                contributors increases, so does varied opinion and management skills
                leading to vulnerabilities in the repository.
            </p>
            <br />
            <p>
                With increasing open source contributions, we would like to ensure all safety
                with our project's help.
            </p>
            <br />
            <p>
                Flipkart Grid 4.0 Information Security allowed us to work on the problem by
                exploring methods and fields untraversed. After careful consideration and thought,
                we have decided to uncdo this project which would take in the Github URL and the
                rule by which they want to scan, based on some
                of the already setup rules available in our application.
            </p>
            <br />
            <p>
                After successful scanning and skimming, the user can view all the
                vulnerabilities in the defined section of the webpage. The vulnerable
                files can be easily accessed in the working tree for rectification purposes
                with the help of their path. The results of previous scans can also be accessed
                for reference and rectification purposes if required.

            </p>
            <br />
            <h1 style={{textAlign:"center"}}>Meet the team!</h1>
            <br />
            <div className='team'>
                <div><img src={vineet} /> <h4>Vineet Upadhyay</h4> <p>Full Stack Developer</p>
                <span>Final Year ELE Student</span>
                <span>Thapar University</span>
                </div>
                <div><img src={ridam} /> <h4>Ridam Aggarwal </h4><p>Frontend Developer</p>
                <span>Final Year EIC Student</span>
                <span>Thapar University</span>
                 </div>
                <div><img src={mukul} /><h4>Mukul Singhal</h4><p>Frontend Developer</p> 
                <span>3rd Year COE Student</span>
                <span>Thapar University</span>
                </div>
            </div>
        </div>
    )
}

export default About