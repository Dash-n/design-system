import type { Story } from "@ladle/react";
import styles from "./PieChart.module.css";
import {
  PieChart as PChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { COLORS } from "../chartutils/index.tsx";
import { toTitlecase } from "../../../Utils/index.tsx";

type Props = {
  id?: string;
  data: string[];
  dataKey: string[];
  nameKey: string[];
  width: number;
  height: number;
  valueKey: string;
  title?: string;
  dataPoints: any;
};

const PieTooltip = ({ active, payload, label }) => {
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

export const PieChart: Story<Props> = ({
  id,
  data,
  dataKey,
  nameKey,
  title,
  width,
  height,
}) => {
  {
    return (
      <div id={id} style={{ width: "100%", height: "100%" }}>
        <p className={styles.title}>{title}</p>
        <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
          <PChart>
            <Tooltip content={<PieTooltip />} />
            <Legend verticalAlign="top" align="right" />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius="10%"
              outerRadius="25%"
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
      </div>
    );
  }
};
