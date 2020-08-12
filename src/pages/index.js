import React from "react";
import { Link } from "gatsby";


import ProfilPic from "../components/ProfilePic";
import SocialIcons from "../components/SocialIcons";
import Container from "../components/Container";
import navStyle from "../components/nav.module.css";
import Vienna from "../../static/images/vienna.png";
import Startup from "../../static/images/rocket.png";
import GA from "../../static/images/general-assembly.png";
import Dodgeball from "../../static/images/party.png";
import Earth from "../../static/images/earth.png";
import Programming from "../../static/images/programming.png";


import SEO from "../components/seo";

const IndexPage = () => (
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
        <div className="about">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="flexContainer">
          <div className="small">
            <img className="image" src={Vienna} alt="Vienna"/>
            <p>Born in</p>
            <p>Vienna, Austria</p>
          </div>
          <div className="small">
            <img className="image" src={Startup} alt="Rocket"/>
            <p>Founder of</p>
            <p>Two Sustainable Startups</p>
          </div>
          <div className="small">
            <img className="image" src={GA} alt="General Assembly"/>
            <p>Self-taught Programmer</p>
            <p>Well, not really. Thanks General Assembly!</p>
          </div>
        </div>
        <div class="flexContainer">
          <div className="small">
            <img className="image" src={Dodgeball} alt="Disco Dodgeball"/>
            <p>Disco Dodgeball</p>
            <p>Champion</p>
          </div>
          <div className="small">
            <img className="image" src={Programming} alt="Programming"/>
            <p>4 Human Languages</p>
            <p>Spoken</p>
          </div>
          <div className="small">
            <img className="image" src={Earth} alt="Earth"/>
            <p>5 Countries</p>
            <p>Lived in</p>
          </div>
        </div>
    </Container>
)

export default IndexPage
