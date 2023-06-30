import React from "react";
import Contact from "../components/contact";
import Navbar from '../components/navbar';
import About from "./AboutPage";
import ShowProjects from "./Project";

function HomePage(){

    return(
        <>
            <div class="Navi">
                <Navbar />
            </div>
            <div class="Landing">
                <h1 className="Ltitle">WELCOME</h1>
                <p id="home_par"> Please feel free to look around my personal portfolio and if you have any questions,
                        submit a form and I will get back to you as soon as I can.
                </p>
            </div>
            <div class="AboutMe">
                <About />
            </div>
            <div class="ProjTitle">
                <h2>PROJECTS</h2>
            </div>
            <div class="ShowProj">
                <ShowProjects />
            </div>
            <Contact />
        </>
        
    )
}


export default HomePage