import React from 'react';

function ExperienceCard(props){
    return (
        <div className="flex flex-row bg-white rounded-lg border shadow-md mt-9 mb-12 max-w-4xl text-black pr-3">
            <img src={require('../../images/Experience/'+props.imgSrc)} alt={props.imgSrc} className='w-56 rounded-full m-6' />
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <h1 className='mr-48 text-2xl'>{props.company}</h1>
                </div>
                <div className='flex'>

                </div>
                <div className='flex flex-row items-center'>
                
                    <div className='flex flex-col text-left'>
                        <div className='flex justify-between mb-4 font-semibold w-content'>
                            <p>{props.role}</p>
                            <p>{props.start_date}-{props.end_date}</p>
                        </div>
                        <div className='text-left mx-5 flex flex-wrap break-words'>
                            <ul className='list-disc'>
                                {props.experience.map((exp) => (
                                   <li>{exp}</li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center w-full flex-wrap'>
                    {props.skills.map((skill) => (
                        <div className='bg-sky-100 text-sky-600 border-sky-600 rounded-full m-1 p-2'>
                        {skill}    
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;