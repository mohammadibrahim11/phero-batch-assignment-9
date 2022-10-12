
import { TopicsContext } from '../Root/Root';
import React, { useContext } from 'react';
import './Topics.css'
import AllTopics from '../AllTopics/AllTopics';

const Topics = () => {
    const topics = useContext(TopicsContext);
    console.log(topics);

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 mt-8 container gap-4 w-full mx-auto'>
          {
            topics.data.map((topic)=> (<AllTopics key={topic.id} topic={topic}></AllTopics>))
          }
        </div>
    );
};

export default Topics;