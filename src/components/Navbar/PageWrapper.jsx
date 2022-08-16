import React from 'react';
import './PageWrapper.css';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import config from '../../config';


function PageWrapper(props){
    return (
        <div className="font-fira">
            <Navbar current={props.current} />
            <div className="justify-center text-center items-center	-z-1">
                <Particles className="particles" params={config.home} />
                <div className='justify-center text-center items-center'>
                    {props.component}
                </div>
            </div>
        </div>
    );
}

export default PageWrapper;