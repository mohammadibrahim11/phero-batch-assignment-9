import React from "react";
import Swal from 'sweetalert2'


const Option = ({ option,correctAnswer }) => {
    console.log(correctAnswer);


    const handleClick = () => {
        console.log(correctAnswer);
        if (option === correctAnswer) {
            Swal.fire(
              'Good job!',
              'Your answer is correct',
              'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'sorry...',
                text: 'your answer is incorrect!',
              
              })
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
