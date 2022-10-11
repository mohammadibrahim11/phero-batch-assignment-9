

 const LoadData = async () => {
    const quizTopicData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const topics = await quizTopicData.json();
    console.log(topics);
    return {topics};
   
}

//  const loadDataWithId=async({params})=>{
//     const quizData = await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
//     const startQuiz = await quizData.json();
//     console.log(startQuiz);
//     return startQuiz
// }
    export default LoadData
   
  