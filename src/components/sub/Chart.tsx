import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "January", sales: 65 },
  { name: "February", sales: 59 },
  { name: "March", sales: 80 },
  { name: "April", sales: 81 },
  { name: "May", sales: 56 },
  { name: "June", sales: 55 },
  { name: "July", sales: 40 },
];

const BarChartComponent: React.FC = () => (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="sales" fill="#8884d8" />
  </BarChart>
);

export default BarChartComponent;
