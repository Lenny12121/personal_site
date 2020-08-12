    import React from "react";
    import { Link } from "gatsby";

    import ProfilPic from "../components/ProfilePic";
    import SocialIcons from "../components/SocialIcons";
    import Container from "../components/Container";
    import navStyle from "../components/nav.module.css";

    const Contact = () => (
        <Container>
            <ProfilPic />
            <div className="pill">
                Software Engineer
            </div>
            <SocialIcons />
            <div className={navStyle.navDiv}>
                <Link className={navStyle.nav} to="/">About</Link>
                <Link className={navStyle.nav} to="/projects">Projects</Link>
                <Link className={navStyle.nav} to="/hire-me">Hire Me</Link>
                <Link className="activeNav" to="/contact">Contact</Link>
                <Link className={navStyle.nav} to="/resume">Resume</Link>
            </div>
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <input type="text" name="name" placeholder="Your Name" />   
                </p>
                <p>
                    <input type="email" name="email" placeholder="Your Email" />
                </p>
                <p>
                    <textarea name="message" placeholder="Let me know what you would like to chat about!"></textarea>
                </p>
                <p>
                    <button type="submit">Contact Me</button>
                </p>
                <p>
                    Or simply email me at: leemann.lenny@gmail.com
                </p>
            </form>
            
        </Container>
    )
    
    export default Contact
    
