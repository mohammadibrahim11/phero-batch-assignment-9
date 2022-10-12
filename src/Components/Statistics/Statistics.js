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
    <div className="chart">
      <div className="mt-40 container">
    
       <BarChart
          className="container mx-auto"
          width={730}
          height={250}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
          <Bar dataKey="" fill="#82ca9d" />
        </BarChart>

     
        <h2 className="text-xl font-bold py-5 text-center text-cyan-400 ">
          {" "}
          Quizz Statistics
        </h2>
      </div>
    </div>
  );
};

export default Statistics;
