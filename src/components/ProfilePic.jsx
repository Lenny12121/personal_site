import React, { Component } from 'react';
import ProfilPic from "../../static/images/0.jpeg";
import PicStyle from "./profile-pic.module.css";

export default class ProfilePic extends Component {
    render() {
        return (
            <div>
                <img className={PicStyle.pic} src={ProfilPic} alt="profile pic"></img>
            </div>
        )
    }
}
