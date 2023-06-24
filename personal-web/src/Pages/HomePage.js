import React from "react";
import Contact from "../components/contact";

function HomePage(){
    return(
        <div>
            <h1 className="title">WELCOME</h1>
            <p id="home_par"> Please feel free to look around my personal portfolio and if you have any questions,
                submit a form and I will get back to you as soon as I can.
            </p>
            <Contact />
        </div>
    )
}


export default HomePage