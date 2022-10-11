import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const StartPractice = () => {
  const quiz = useLoaderData();
  console.log(quiz);
  const { name } = quiz.data;
  return (
    <div>
     
    <div className="font-bold text-xl text-cyan-600">
    Quizz of {name}
    </div>

      <br />
      <div className="">
        {quiz.data.questions.map((question) => (
          <Question key={question.id} question={question}></Question>
        ))}{" "}
      </div>
      <div></div>
    </div>
  );
};

export default StartPractice;
