import React from "react";
import { Link } from "gatsby";

import ProfilPic from "../components/ProfilePic";
import SocialIcons from "../components/SocialIcons";
import Container from "../components/Container";
import SEO from "../components/seo"

const IndexPage = () => (
  <Container>
    <ProfilPic />
    <div className="pill">
      Software Engineer
    </div>
    <SocialIcons />
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/hire-me">Hire Me</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/resume">Resume</Link>
  </Container>
)

export default IndexPage
