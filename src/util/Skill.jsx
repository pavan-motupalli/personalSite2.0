import React from 'react';


function Skill(props){
    return (
        <div className='bg-sky-100 text-sky-600 border-sky-600 rounded-full m-1 p-2'>
            {props.skill}
        </div> 
    )
}

export default Skill;