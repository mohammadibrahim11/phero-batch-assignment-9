
const LoadData = async () => {
    const quizTopicData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const topics = await quizTopicData.json();
    console.log(topics);
    return {topics};
   
}
    export default LoadData;