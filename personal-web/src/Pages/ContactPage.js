import React from "react";
import Contact from "../components/contact";

function ContactPage(){
    return(
        <>
        <div>
            <h2>Find Me On</h2>
            <a className="linkedin" href="https://www.linkedin.com/in/chester-corpuz-5b5b1b243/">
                <img src='../../public/Assets/Images/linkedin.png' alt='linkedin'></img>
            </a>
            <a className="github" href="https://github.com/chesterrc">
                <img src='../../public/Assets/Images/github.png' alt='github'></img>
            </a>
        </div>
        <Contact />
        </>
    )
}

export default ContactPage