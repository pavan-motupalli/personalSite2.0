import React from 'react';
import './About.css';
import PageWrapper from '../Navbar/PageWrapper';


function AboutComponent(){
    return (
    <div className=''>
        <h1>About</h1>
    </div>
    )
}

function About(){
    return (
        <PageWrapper current="About" component={<AboutComponent />} />
    );
}

export default About;