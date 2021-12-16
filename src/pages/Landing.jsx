import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Landing = () => {

    return (
        <>
            <Navbar />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Landing
