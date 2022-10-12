import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  console.log(topic);
  const { logo, name,id,total} = topic;
  return (
    <div className="card shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={logo} alt="Shoes" className="rounded-xl bg-gray-100" />
      </figure>
      <div className="card-body  items-center text-center">
        <div className="text-base  text-purple-400 mb-2 text-center">
          Total quiz : {total}
        </div>
      
        <div className="card-actions">
         <div className="flex justify-between">
        
         <h2 className="card-title text-base  text-purple-400">{name}</h2>
         <Link to={`/startquiz/${id}`}>
         <button className=" btn text-xs ml-5 ">start practice <ArrowRightIcon className="h-5 w-5 ml-1 text-white"/>   </button>
         </Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
