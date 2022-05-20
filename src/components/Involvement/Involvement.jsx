import React from 'react';
import './Involvement.css';
import PageWrapper from '../Navbar/PageWrapper';


function InvolvementComponent(){
    return (
    <div className=''>
        <h1>Involvement</h1>
    </div>
    )
}

function Involvement(){
    return (
        <PageWrapper current="Involvement" component={<InvolvementComponent />} />
    );
}

export default Involvement;