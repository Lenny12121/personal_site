import React from "react";
import { Link } from "gatsby";

import ProfilPic from "../components/ProfilePic";
import SocialIcons from "../components/SocialIcons";
import Container from "../components/Container";
import navStyle from "../components/nav.module.css";

const About = () => (
    <Container>
        <ProfilPic />
        <div className="pill">
            Software Engineer
        </div>
        <SocialIcons />
        <div className={navStyle.navDiv}>
            <Link className="activeNav" to="/">About</Link>
            <Link className={navStyle.nav} to="/projects">Projects</Link>
            <Link className={navStyle.nav} to="/hire-me">Hire Me</Link>
            <Link className={navStyle.nav} to="/contact">Contact</Link>
            <Link className={navStyle.nav} to="/resume">Resume</Link>
        </div>
    </Container>
  )
  
  export default About
  
