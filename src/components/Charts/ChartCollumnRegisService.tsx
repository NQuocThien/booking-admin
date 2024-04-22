import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
interface IProps {
  totalDoctor: number;
  totalPackage: number;
  totalVaccine: number;
  totalSpecialty: number;
}

const ChartColumnRegisService: React.FC<IProps> = (props) => {
  const { totalDoctor, totalPackage, totalSpecialty, totalVaccine } = props;
  const [year, setYear] = useState(new Date().getFullYear());
  const current = new Date();

  const data = [
    { name: "Bác sĩ", register: totalDoctor },
    { name: "Chuyên khoa", register: totalSpecialty },
    { name: "Gói khám", register: totalPackage },
    { name: "Tiêm chủng", register: totalVaccine },
  ];
  return (
    <div>
      <BarChart width={450} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="register" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ChartColumnRegisService;
