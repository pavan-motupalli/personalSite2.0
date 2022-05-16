import React from 'react';
import './Home.css';
import Particles from 'react-particles-js';
import config from '../../config';


function Home(){
    return (
        <div className="home-wrapper">
            <div className="home">
                <Particles className="particles" params={config.home} />
            </div>
        </div>
    );
}

export default Home;