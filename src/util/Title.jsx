import React from "react";

function Title(props){
    return (
        <div className="mb-8">
            <h1 className='font-medium text-4xl w-fit'>{props.page}</h1>
            <div className='m-auto border-t-4 border-solid border-sky-600 w-20'></div>
        </div>
    )
}

export default Title;