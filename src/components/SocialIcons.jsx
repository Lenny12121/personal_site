import React, { Component } from 'react';
import GitHub from "../../static/images/logo.png";
import LinkedIn from "../../static/images/linkedin (1).png";
import Email from "../../static/images/mail.png";


export default class SocialIcons extends Component {
    render() {
        return (
            <div>
                <a className="icon" href=""><img src={LinkedIn} alt="linkedin"/></a>
                <a className="icon" href=""><img src={GitHub} alt="github"/></a>
                <a className="icon" href=""><img src={Email} alt="Email"/></a>
            </div>
        )
    }
}
