import React from 'react';
import './Contact.css';
import PageWrapper from '../Navbar/PageWrapper';


function ContactComponent(){
    return (
    <div className=''>
        <h1>Contact</h1>
    </div>
    )
}

function Contact(){
    return (
        <PageWrapper current="Contact" component={<ContactComponent />} />
    );
}

export default Contact;