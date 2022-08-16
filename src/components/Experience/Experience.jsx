import React from 'react';
import './Experience.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';


function ExperienceComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="Experience"
        />
    </div>
    )
}

function Experience(){
    return (
        <PageWrapper component={<ExperienceComponent />} />
    );
}

export default Experience;