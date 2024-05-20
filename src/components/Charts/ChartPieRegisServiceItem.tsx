import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface Item {
  name: string;
  count: number;
}

interface IProps {
  data: Item[];
}

const ChartPieRegisServiceItem: React.FC<IProps> = (props) => {
  // Màu sắc cho các phần tử trong biểu đồ tròn
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const { data } = props;
  const sortedData = data.sort((a, b) => b.count - a.count);
  const largestData = sortedData.slice(0, 3);
  const otherCount = sortedData
    .slice(3)
    .reduce((total, item) => total + item.count, 0);
  const newData = [...largestData, { name: "Other", count: otherCount }];
  return (
    <div>
      <PieChart width={450} height={300}>
        <Pie
          dataKey="count"
          isAnimationActive={false}
          data={newData}
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
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartPieRegisServiceItem;
