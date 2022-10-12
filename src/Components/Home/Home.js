import React, { useContext } from 'react';
import { TopicsContext } from '../Root/Root';
import Topic from '../Topic/Topic';
import Lottie from 'lottie-react'
import reader from '../../asset/reader.json'
import './Home.css'




const Home = () => {
    const topics = useContext(TopicsContext);
    console.log(topics);
  
    
    return (
      <div>
              <div className=" w-11/12 lg:flex md:flex justify-evenly items-center  py-6  mx-auto">

            <div className="lg:w-1/2 md:w-1/2 sm:w-100% mx-auto">
            <h1 className="text-xl font-bold sm:w-100% md:text-2xl text-purple-500 mx-auto ">A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.</h1>
            </div>
              <div className="mt-8 lg:w-1/2 md:w-1/2 mx-auto sm:w-100%">
              <div className="w-80 h-80 mx-auto" >
                <Lottie animationData={reader} loop={true} />
                </div>
              </div>
                
            </div>

       <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  justify-center align-center gap-4 container w-90 mx-auto'>
       {
           topics.data.map((topic)=> (<Topic key={topic.id} topic={topic}></Topic>))
        }
       </div>
      </div>
    );
};

export default Home;