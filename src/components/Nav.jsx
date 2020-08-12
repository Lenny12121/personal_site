import React, { Component } from 'react';
import { Link } from "gatsby";

import navStyle from "../components/nav.module.css";

export default class Nav extends Component {
    render() {
        return (
            <div className={navStyle.navDiv}>
                <Link className={navStyle.nav} to="/about">About</Link>
                <Link className={navStyle.nav} to="/projects">Projects</Link>
                <Link className={navStyle.nav} to="/hire-me">Hire Me</Link>
                <Link className={navStyle.nav} to="/contact">Contact</Link>
                <Link className={navStyle.nav} to="/resume">Resume</Link>
                <Link className={navStyle.nav} to="/">Home</Link>
            </div>
        )
    }
}
