import React from 'react';
import './Involvement.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';


function InvolvementComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="Involvement"
        />
    </div>
    )
}

function Involvement(){
    return (
        <PageWrapper current="Involvement" component={<InvolvementComponent />} />
    );
}

export default Involvement;