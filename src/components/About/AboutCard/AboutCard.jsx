import React from "react";



function AboutCard(props){
    return (
        <div className="flex flex-col bg-white rounded-lg border shadow-md max-w-3xl mb-9">
            <h1 className="text-black text-4xl font-semibold">{props.title}</h1>
            <div className="flex flex-row">
                <p className="text-black text-left h-auto mb-auto mt-3 ml-3 text-lg">{props.description}</p>
                <img src={require('../../../images/About/'+props.imgSrc)} alt="High School" className="w-64 m-3 rounded"/>
            </div>
        </div>
    );
}

export default AboutCard;