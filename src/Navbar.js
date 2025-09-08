import React from "react"
import logo from "./Logo.png"
import style from "./style.css"
export default function Navbar(){
    return (
        <>
        <nav>
            <img src={logo}alt="airbnb-logo" className="nav-logo"></img>
        </nav>
        </>
    )
}
