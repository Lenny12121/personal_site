import React from "react";
import { Link } from "gatsby";

import ProfilPic from "../components/ProfilePic";
import SocialIcons from "../components/SocialIcons";
import Container from "../components/Container";
import navStyle from "../components/nav.module.css";
import FullTime from "../../static/images/helpline.png";
import PartTime from "../../static/images/sign-form.png";
import MVP from "../../static/images/mvp.png";
import Interviews from "../../static/images/job-interview.png";
import Equity from "../../static/images/handshake.png";
import Beer from "../../static/images/beer.png";

const HireMe = () => (
    <Container>
        <ProfilPic />
        <div className="pill">
            Software Engineer
        </div>
        <SocialIcons />
        <div className={navStyle.navDiv}>
            <Link className={navStyle.nav} to="/">About</Link>
            <Link className={navStyle.nav} to="/projects">Projects</Link>
            <Link className="activeNav" to="/hire-me">Hire Me</Link>
            <Link className={navStyle.nav} to="/contact">Contact</Link>
            <Link className={navStyle.nav} to="/resume">Resume</Link>
        </div>
        <div class="flexContainer">
            <div className="small">
                <img className="image" src={FullTime} alt="Full Time"/>
                <p>Full Time</p>
                <p>
                    Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...
                </p>
                <button><Link to="/contact">Let's Chat</Link></button>
            </div>
            <div className="small">
                <img className="image" src={PartTime} alt="Part Time"/>
                <p>Part Time</p>
                <p>
                    Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...
                </p>
                <button><Link to="/contact">Let's Chat</Link></button>
            </div>
            <div className="small">
                <img className="image" src={MVP} alt="MVP"/>
                <p>Interim CTO / Define MVP</p>
                <p>
                    Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...
                </p>
                <button><Link to="/contact">Let's Chat</Link></button>
            </div>
        </div>

        <div class="flexContainer">
            <div className="small">
                <img className="image" src={Interviews} alt="Interviews"/>
                <p>Building A Team</p>
                <p>
                    Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...
                </p>
                <button><Link to="/contact">Let's Chat</Link></button>
            </div>
            <div className="small">
                <img className="image" src={Equity} alt="Equity"/>
                <p>Co-Founder / Equity</p>
                <p>
                    Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...
                </p>
                <button><Link to="/contact">Let's Chat</Link></button>
            </div>
            <div className="small">
                <img className="image" src={Beer} alt="Beer"/>
                <p>Just want to chat have a beer & cook?</p>
                <p>
                    Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...
                </p>
                <button><Link to="/contact">Let's Definitely Chat</Link></button>
            </div>
        </div>
    </Container>
)

export default HireMe

