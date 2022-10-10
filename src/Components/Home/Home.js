import React from 'react';
// import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
            <div className="space-y-8">
                <h1 className="text-xl font-bold md:tracking-tight md:text-2xl text-purple-500">A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.</h1>
            </div>
           
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
		<h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
	</div>
	<p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>
        
        </article>
   
    </div>
    );
};

export default Home;