import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
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
        </>
    )
}

export default Landing
