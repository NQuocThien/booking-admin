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
interface Item {
  name: string;
  count: number;
}

interface IProps {
  data: Item[] | undefined;
  name: string;
}

const ChartColumnRegisServiceItems: React.FC<IProps> = (props) => {
  const { data, name } = props;
  const barSize = (data?.length && 300 / data.length) || 30;
  return (
    <div>
      <BarChart
        width={550}
        height={300}
        data={data}
        layout="vertical"
        barSize={barSize}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis angle={-90} textAnchor="end" type="number" />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 11, overflow: "ellipsis" }}
          width={145}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" name={name} />
      </BarChart>
    </div>
  );
};

export default ChartColumnRegisServiceItems;
