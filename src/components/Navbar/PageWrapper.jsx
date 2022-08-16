import React from 'react';
import './PageWrapper.css';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import config from '../../config';

function helperC(page){
    if (page==='About'){
        return 'particles-a';
    }else{
        return 'particles';
    }
}



function PageWrapper(props){
    
    
    console.log(helperC(props.current));
    return (
        <div className="font-fira">
            <Navbar current={props.current} />
            <div className="-z-1">
                <Particles className={helperC(props.current)} params={config.home} />
                <div className='justify-center text-center items-center place-items-center'>
                    {props.component}
                </div>
            </div>
        </div>
    );
}

export default PageWrapper;