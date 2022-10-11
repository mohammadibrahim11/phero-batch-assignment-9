import React from 'react';

const Option = ({option}) => {
    console.log(option);
    return (
        <div className=' border border-purple-600 rounded p-4 m-4 flex justify-start content-center '>
         <input className='mr-4' type="radio" name="quiz" id="" /><span>{option}</span>
        </div>
    );
};

export default Option;