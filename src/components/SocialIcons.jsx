import React, { Component } from 'react';
import GitHub from "../../static/images/logo.png";
import LinkedIn from "../../static/images/linkedin (1).png";

export default class SocialIcons extends Component {
    render() {
        return (
            <div>
                <img src={GitHub} alt="github"/>
                <img src={LinkedIn} alt="linkedin"/>
            </div>
        )
    }
}
