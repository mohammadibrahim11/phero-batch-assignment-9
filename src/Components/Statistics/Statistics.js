import React, { useContext } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { TopicsContext } from "../Root/Root";
import "./Statistics.css";

const Statistics = () => {
  const statistics = useContext(TopicsContext);
  console.log(statistics);
  const { data } = statistics;

  return (
   
            <div className=" mt-3  mb-32">
      <BarChart className="w-full mx-auto pt-12" width={750} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis  dataKey="name" />
        <YAxis dataKey="total" />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
        <Bar dataKey="" fill="#8884d8" />
      </BarChart>
    </div>
   
 
    //
  );
};

export default Statistics;
