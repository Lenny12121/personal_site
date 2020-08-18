    import React from "react";
    import { Link } from "gatsby";

    import ProfilPic from "../components/ProfilePic";
    import SocialIcons from "../components/SocialIcons";
    import Container from "../components/Container";
    import navStyle from "../components/nav.module.css";
    import CSS from "../../static/images/css.png";
    import JavaScript from "../../static/images/javascript.png";
    import Html from "../../static/images/html.png";
    import Python from "../../static/images/python.png";
    import ReactJS from "../../static/images/react.png";
    import Bootstrap from "../../static/images/bootstrap.png";
    import Mamoq from "../../static/images/mamoq.png";
    import GetMads from "../../static/images/getmads.png";
    import TweetBattle from "../../static/images/battleheader.jpg";
    import FeatureRequest from "../../static/images/business-idea.png";
    import ProfilPics from "../../static/images/0.jpeg";





    const Projects = () => (
    <Container>
        <ProfilPic />
        <div className="pill">
            Software Engineer
        </div>
        <SocialIcons />
        <div className={navStyle.navDiv}>
            <Link className={navStyle.nav} to="/">About</Link>
            <Link className="activeNav" to="/projects">Projects</Link>
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
                <img className="image" src={CSS} alt="CSS"/>
            </div>
            <div className="small">
                <img className="image" src={JavaScript} alt="JavaScript"/>
            </div>
            <div className="small">
                <img className="image" src={Html} alt="HTML"/>
            </div>
            <div className="small">
                <img className="image" src={Python} alt="Python"/>
            </div>
            <div className="small">
                <img className="image" src={ReactJS} alt="React JS"/>
            </div>
            <div className="small">
                <img className="image" src={Bootstrap} alt="Bootstrap"/>
            </div>
        </div>
        <div class="flexContainer">
            <div className="small">
                <div className="imageDiv">
                <img className="imageM" src={GetMads} alt="Get Mads"/>
                </div>
                <a href="https://www.getmads.com" target="_blank"><p>Get Mads</p></a>
                <p>Built with: React, Bootstrap, MongoDB, Node.js,auth0, Webflow, Airtable</p>
            </div>
            <div className="small">
                <div className="imageDiv">
                <img className="imageM" src={Mamoq} alt="Mamoq"/>
                </div>
                <a href="https://www.mamoq.com" target="_blank"><p>MAMOQ</p></a>
                <p>Built with: Shopify, integrates with top 8 ecommerce platforms via API</p>
            </div>
            <div className="small">
                <img className="imageM" src={TweetBattle} alt="TweetBattle"/>
                <a href="https://tweetbattle-sei.herokuapp.com/" target="_blank"><p>Trump vs. Kanye</p></a>
                <p>Built with: React, Node.js, Bootstrap, Kanye API, Trump API (Yes they both have one), Giphy API</p>
            </div>
        </div>
        <div class="flexContainer">
            <div className="small">
                <img className="image" src={FeatureRequest} alt="Feature Request"/>
                <a href="https://shielded-anchorage-77439.herokuapp.com/sign-up/new" target="_blank"><p>Feature Request App</p></a>
                <p>Built with: Express, EJS, Javascript, jQuery, Multer, bcrypt, MongoDB, and Bootstrap</p>
            </div>
            <div className="small">
                <img className="imageM" src={GetMads} alt="Get Mads"/>
                <a href="https://www.getmads.com/flight-tracker" target="_blank"><p>Flight Tracker</p></a>
                <p>Built with: Node.js, HTML, Pure CSS, JavaScript, jQuery, jQueryUI, Webflow, Great Circle Mapper API </p>
            </div>
            <div className="small">
                <img className="image" src={ProfilPics} alt="Lenny Leemann"/>
                <a href="https://lennyleemann.com/" target="_blank"><p>This Website</p></a>
                <p>Built with: Gatsby, Netlify</p>
            </div>
        </div>
    </Container>
    )
    
    export default Projects
    
