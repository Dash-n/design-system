import type { Story } from "@ladle/react";
import styles from "./LineChart.module.css";
import { toTitlecase } from "../..";
import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  id: string;
  name: string;
  data: string[];
  keys?: string[];
  width: number;
  height: number;
  xAxisKey: string;
  xLabel: string;
  yLabel: string;
  title?: string;
  dataPoints: any;
  dotRadius: number;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipTitle}>{`${label}`} </p>
        {payload.map((column) => {
          console.log(column);
          return (
            <p className={styles.label}>
              {`${toTitlecase(column.name)}: ${column.value}`}{" "}
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};

export const LineChart: Story<Props> = ({
  data,
  width,
  height,
  keys,
  xAxisKey,
  dataPoints,
  title,
  xLabel,
  yLabel,
  dotRadius,
}) => {
  keys ??= [];
  dataPoints = dataPoints[0];

  const COLORS = ["#DDCC77", "#CC6677", "#88CCEE"];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p className={styles.title}>{title}</p>
      <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
        <LChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey}>
            <Label value={xLabel} position="bottom" />
          </XAxis>

          <YAxis
            label={{ value: yLabel, angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="top" align="right" />
          {keys.map((point, index) => {
            console.log(dotRadius);
            return dataPoints[point] ? (
              <Line
                dataKey={point}
                stroke={
                  dataPoints[point].color ?? COLORS[index % COLORS.length]
                }
                activeDot={{ r: dotRadius }}
              />
            ) : (
              ""
            );
          })}
        </LChart>
      </ResponsiveContainer>
    </div>
  );
};
