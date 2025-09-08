import React from "react"
import Group77 from "./Group77.png"
import style from "./style.css" 
function Hero(){
    return (
        <section className="hero">
        <img src={Group77}alt="grid-png" className="grid-layout"></img>
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">Join unique  interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
export default Hero