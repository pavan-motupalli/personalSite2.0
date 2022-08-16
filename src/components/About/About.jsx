import React from 'react';
import './About.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';
import AboutCard from './AboutCard/AboutCard';
import { AboutData } from './AboutData';


function AboutComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="About"
        />
        {AboutData.map((card) => (
            <AboutCard 
                title={card.title}
                description={card.description}
                imgSrc={card.image}
            />
        ))}
    </div>
    )
}

function About(){
    return (
        <PageWrapper current="About" component={<AboutComponent />} />
    );
}

export default About;