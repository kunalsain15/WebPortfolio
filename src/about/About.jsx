import React from "react"
import "./About.css";

const About = () => {
    return(
        <div className='a'>
        <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
        <img src="bodyoriginal.jpg" className='a-img' alt=""/>
        </div>
        </div>
        <div className='a-right'>
        <h1 className='a-tittle'>ABOUT ME</h1>
        <p className='a-sub'>
        Competitive sports are a lot fun. They help you stay healthy, meet new people,and teach you about teamwork.
        if you'v never played a sport before,its a chance to try something new.
        </p>
        <p className='a-disc'>
        But sports also take alot of hard work and practice. 
        </p>
        <div className='a-award'>
        <img src="awardoriginal.jpg" className='a-award-img' alt=""/>
        <div className='a-award-texts'>
        <h4 className='a-award-tittle'>International Award</h4>
        </div>
        </div>
        </div>
        </div>
        );
};

export default About;



