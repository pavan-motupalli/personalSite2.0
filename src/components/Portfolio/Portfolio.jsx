import React from 'react';
import './Portfolio.css';
import PageWrapper from '../Navbar/PageWrapper';
import Title from '../../util/Title';


function PortfolioComponent(){
    return (
    <div className='flex flex-col h-screen my-auto items-center'>
        <Title 
            page="Portfolio"
        />
    </div>
    )
}

function Portfolio(){
    return (
        <PageWrapper current="Portfolio" component={<PortfolioComponent />} />
    );
}

export default Portfolio;