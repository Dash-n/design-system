import type { Story } from "@ladle/react";
import styles from "./ScatterChart.module.css";
import { toTitlecase } from "../../index.tsx";
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
import { CustomTooltip, CustomLegend, COLORS } from "../../index.tsx";

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
  strokeWidth: number;
};

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, index, value } = props;
  console.log(payload);

  if (value > 2500) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="red"
        viewBox="0 0 1024 1024"
      >
        <path d="M3 3 L3 25 L23 14 z" />
      </svg>
    );
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={200}
      height={200}
      fill="green"
      stroke="red"
      viewBox="0 0 1024 1024"
    >
      <path d="M 50,5 95,97.5 5,97.5 z" />
    </svg>
  );
};

export const ScatterChart: Story<Props> = ({
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
  strokeWidth,
}) => {
  keys ??= [];
  dataPoints = dataPoints[0];

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
          {/* <Legend  /> */}
          <Legend verticalAlign="top" align="right" content={CustomLegend} />
          {keys.map((point, index) => {
            console.log(dotRadius);
            return dataPoints[point] ? (
              <Line
                dataKey={point}
                stroke={
                  dataPoints[point].color ?? COLORS[index % COLORS.length]
                }
                strokeWidth={0}
                dot={<CustomizedDot />}
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
