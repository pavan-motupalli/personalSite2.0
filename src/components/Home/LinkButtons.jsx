import React from 'react';
import './LinkButtons.css';

function MediaLink (props){
    return (
        <div>
            <a target="_blank" rel="noopener noreferrer" href={props.href} className="link">
                <img src={props.imgSrc} className="img" alt="Media Link"/>
                <strong className="linkText">{props.title}</strong>
            </a>
        </div>
    );
}

export default MediaLink;