import React from "react";

const Option = ({ option,correctAnswer }) => {
    console.log(correctAnswer);


    const handleClick = () => {
        console.log(correctAnswer);
        if (option === correctAnswer) {
          alert("click");
        } else {
          alert("wrong");
        }
      };
//   console.log(handleClick);

  return (
    <div>
      <div className=" border border-purple-600 rounded p-4 m-4 flex justify-start content-center ">
        <input
        onClick={handleClick}
          className="mr-4"
          type="radio"
          name="quiz"
          id=""
        />
        <span>{option}</span>
      </div>
    </div>
  );
};

export default Option;
