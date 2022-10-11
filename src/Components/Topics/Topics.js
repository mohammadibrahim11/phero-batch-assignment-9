
import { TopicsContext } from '../Root/Root';
import React, { useContext } from 'react';
import './Topics.css'
import AllTopics from '../AllTopics/AllTopics';

const Topics = () => {
    const topics = useContext(TopicsContext);
    console.log(topics);

    return (
        <div className='grid grid-cols-4 container gap-4 w-full mx-auto'>
          {
            topics.data.map((topic)=> (<AllTopics key={topic.id} topic={topic}></AllTopics>))
          }
        </div>
    );
};

export default Topics;