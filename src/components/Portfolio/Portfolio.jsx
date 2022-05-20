import React from 'react';
import './Portfolio.css';
import PageWrapper from '../Navbar/PageWrapper';


function PortfolioComponent(){
    return (
    <div className=''>
        <h1>Portfolio</h1>
    </div>
    )
}

function Portfolio(){
    return (
        <PageWrapper current="Portfolio" component={<PortfolioComponent />} />
    );
}

export default Portfolio;