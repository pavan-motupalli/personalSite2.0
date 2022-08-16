import React from 'react';
import './Leadership.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';


function LeadershipComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="Leadership"
        />
    </div>
    )
}

function Leadership(){
    return (
        <PageWrapper current="Leadership" component={<LeadershipComponent />} />
    );
}

export default Leadership;