import React from 'react';
import './Experience.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';
import TAMU from '../../images/Experience/TAMU.jpg';
import ExperienceCard from '../../util/ExperienceCard/ExperienceCard';
import { ExperienceData } from './ExperienceData';

function ExperienceComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="Experience"
        />
        <div className="flex flex-col p-4 text-black bg-white shadow-md rounded">
            <div className='flex flex-col items-center w-fit'>
                <h1 className='text-4xl font-semibold'>Education</h1>
                <hr className='w-full h-[2px] bg-black mb-4'/>
                <div className="flex flex-row flex-wrap justify-around items-center">
                    <div className='flex flex-col items-center mx-10 text-lg'>
                        <img className='w-56 rounded' src={TAMU} alt="tamu logo"/>
                        <h3 className='text-[#430000]'><b>Texas A&M University</b></h3>
                        <div className='underline'>Bachelor's in Computer Science</div>
                        <div>Minor in Business</div>
                        <div><i>GPA: <b>4.00</b></i></div>
                    </div>
                    <div className='mx-10 text-lg'>
                        <h3 className='font-semibold'><u>Important Coursework</u></h3>
                        <div>Data Structures and Algorithms</div>
                        <div>Machine Learning</div>
                        <div>Artificial Intelligence</div>
                        <div>Parallel Computing (Graduate)</div>
                        <div>Design and Analysis of Algorithms</div>
                        <div>Problem Solving Strategies</div>
                        <div>Computer and Network Security</div>
                    </div>
                </div>
            </div>
        </div>
        {ExperienceData.map((exp)  => (
            <ExperienceCard
                company={exp.company}
                role={exp.role}
                start_date={exp.start_date}
                end_date={exp.end_date}
                imgSrc={exp.imgSrc}
                experience={exp.experience}
                skills={exp.skills}
             />
        ))}
    </div>
    )
}

function Experience(){
    return (
        <PageWrapper current="Experience" component={<ExperienceComponent />} />
    );
}

export default Experience;