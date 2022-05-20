import React from 'react';
import './Experience.css';
import PageWrapper from '../Navbar/PageWrapper';


function ExperienceComponent(){
    return (
    <div className=''>
        <h1>Experience</h1>
    </div>
    )
}

function Experience(){
    return (
        <PageWrapper component={<ExperienceComponent />} />
    );
}

export default Experience;