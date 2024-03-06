import React, { PureComponent } from "react";
import styles from "./PieChart.module.css";
import {
  PieChart as PChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];
type Props = {
  id: string;
  name: string;
  data: string[];
  key: string[];
  width: number;
  height: number;
  valueKey: string;
  title?: string;
  dataPoints: any;
};
import { toTitlecase } from "../..";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p>{`${toTitlecase(payload[0].name)}: ${payload[0].value}`} </p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChart: Story<Props> = ({ data, dataKey, nameKey }) => {
  {
    // pieData = data.map((entry)=>
    // )
    return (
      <ResponsiveContainer width="50%" height="50%">
        <PChart>
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            innerRadius="10%"
            outerRadius="100%"
            fill="#8884d8"
            dataKey={dataKey}
            nameKey={nameKey}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PChart>
      </ResponsiveContainer>
    );
  }
};
