import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css"
import Home from "../Routes/Home";
import About from "../Routes/About";
import Projects from "../Routes/Projects";
import Civi from "../Routes/Civi";
import Contact from "../Routes/Contact";
import myimg from "../assets/images/portfolio/myImage.jpg"

function Navbar(){
    return(
        <div className="wrapper">
            <div className="contents flex row justify-space">
                <div className="myname flex-15">
                   <h3>
                    Uju Ndukwu.
                   </h3>
                </div>
                <div className="Nav flex-15">
                    <ul className="flex row gap">
                        <Link to="/home" >
                            <li>Home</li>

                        </Link>
                        <Link to="/about">
                            <li>About</li>

                        </Link>
                        <Link to="/projects">
                            <li>Projects</li>

                        </Link>
                        
                    
                    </ul>
                </div>
                <div className="Nav2 flex-15  ">
                    <ul className="flex row  gap2">
                        <Link to={Civi}>
                            <li id="cv">Download CV</li>

                        </Link>
                        <Link to={Contact}>
                            <li>Contact me</li>

                        </Link>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Navbar
