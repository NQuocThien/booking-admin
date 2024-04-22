import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

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
    { name: "Bác sĩ", value: totalDoctor },
    { name: "Chuyên khoa", value: totalSpecialty },
    { name: "Gói khám", value: totalPackage },
    { name: "Tiêm chủng", value: totalVaccine },
  ];

  // Màu sắc cho các phần tử trong biểu đồ tròn
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <PieChart width={450} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#000"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartColumnRegisService;
