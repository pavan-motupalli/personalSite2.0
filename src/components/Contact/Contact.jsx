import React from 'react';
import './Contact.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';


function ContactComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="Contact"
        />
    </div>
    )
}

function Contact(){
    return (
        <PageWrapper current="Contact" component={<ContactComponent />} />
    );
}

export default Contact;