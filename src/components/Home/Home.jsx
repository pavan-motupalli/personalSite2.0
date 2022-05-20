import React from 'react';
import './Home.css';
import PageWrapper from '../Navbar/PageWrapper';


function HomeComponent(){
    return (
    <div className=''>
        <h1>Home</h1>
    </div>
    )
}

function Home(){
    return (
        <PageWrapper current="Home" component={<HomeComponent />} />
    );
}

export default Home;