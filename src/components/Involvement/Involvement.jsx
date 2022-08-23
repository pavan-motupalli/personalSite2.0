import React from 'react';
import './Involvement.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';
import InvolvementCard from '../../util/InvolvementCard/InvolvementCard';
import { InvolvementData } from './InvolvementData';


function InvolvementComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="Involvement"
        />
        {InvolvementData.map((exp)  => (
            <InvolvementCard
                company={exp.organization}
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

function Involvement(){
    return (
        <PageWrapper current="Involvement" component={<InvolvementComponent />} />
    );
}

export default Involvement;