import React from "react";

function ShowProjects(){
    return(
        <>
        <div class="DndBot">
            <h2 class="Dndtitle">Dungeons and Dragons Economy Bot</h2>
            <p class="Dndabout"> This bot was created using Discord's API</p>
            <div class="DndImage"></div>
        </div>
        <div class="ObjDetect">
            <h2 class="ObjTitle">Air Drums</h2>
            <p class="Objabout">Created an OpenCV object detection for stick like objects
            to create sound based on the downward movement of the stick </p>
            <div class="ObjImage"></div>
        </div>
        </>
    )
}

export default ShowProjects