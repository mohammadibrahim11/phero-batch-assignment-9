import React, { useContext } from 'react';
import { TopicsContext } from '../Root/Root';
import Topic from '../Topic/Topic';
// import Topics from '../Topics/Topics';
import './Home.css'


const Home = () => {
    const topics = useContext(TopicsContext);
    console.log(topics);
    return (
      <div>
              <div className="space-y-8 max-w-2xl px-6 py-6 mx-auto space-y-12">
                <h1 className="text-xl font-bold md:tracking-tight md:text-2xl text-purple-500">A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.</h1>
            </div>

       <div className='flex justify-center align-center gap-4 container w-90 mx-auto'>
       {
           topics.data.map((topic)=> (<Topic key={topic.id} topic={topic}></Topic>))
        }
       </div>
      </div>
    );
};

export default Home;