import React from 'react';
import './Leadership.css';
import PageWrapper from '../Navbar/PageWrapper';


function LeadershipComponent(){
    return (
    <div className=''>
        <h1>Leadership</h1>
    </div>
    )
}

function Leadership(){
    return (
        <PageWrapper current="Leadership" component={<LeadershipComponent />} />
    );
}

export default Leadership;