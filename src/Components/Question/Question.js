import React from "react";
import Option from "../Option/Option";
import { useState, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";


const Question = ({ question }) => {
  const [string, setString] = useState(question.question);
  const [toggle, setToggle] = useState(false);
  const { correctAnswer } = question;
  useEffect(() => {
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replace(regex, "");
    setString(newString);
  }, [string]);

  const handleClick = (selectAnswer,correctAnswer) => {
    console.log(correctAnswer);
           if(selectAnswer === correctAnswer){
            alert("click");
           }else{
            alert('wrong');
           }
    
  };

  return (
    <div className="border rounded border-purple-600 w-9/12 mx-auto my-6 bg-gray-100 ">
      <div className="text-cyan-600 font-bold p-4">{string}</div>

      <div className=" flex flex-row justify-center align-center">
          <div>
            <EyeIcon
              onClick={() => setToggle(!toggle)}
              className=" h-5 w-5 mx-auto text-purple-500"
            />
            {toggle && <div> correctAnswer : {correctAnswer}</div>}
          </div>
        </div>
  

      <div className="grid grid-cols-2 w-full mx-auto mt-6 mb-6">
        {question.options.map((option) => (
          <Option option={option} handleClick={handleClick}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
