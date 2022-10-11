import React from "react";
import Option from "../Option/Option";
import  { useState, useEffect } from "react";

const Question = ({ question }) => {
    const [string, setString] = useState(question.question);
     useEffect(() => {
        const regex = /(<([^>]+)>)/ig;
        const newString = string.replace(regex,'');
        setString(newString);
    }, []);

  
  return (
    <div className="border rounded border-purple-600 w-9/12 mx-auto my-6 bg-gray-100 ">
      <div 
      className="text-cyan-600 font-bold p-4">{string}</div>
      <div className="grid grid-cols-2 w-full mx-auto mt-6 mb-6">
        {question.options.map((option) => (
          <Option option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
