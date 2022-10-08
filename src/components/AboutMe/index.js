import React from "react";
import profile from '../../assets/images/profile.JPG'

function AboutMe() {
    return (
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <img src={profile} alt='profile' className="about-me-photo" />
            <p>Young full stack developer who wants to learn the field as quickly
            as possible.  Recent graduate of the University of North Carolina at Charlotte
            'Flex Full Stack bootcamp</p>
        </div>
    )
}

export default AboutMe