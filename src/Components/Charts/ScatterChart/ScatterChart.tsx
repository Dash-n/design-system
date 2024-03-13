import type { Story } from "@ladle/react";
import styles from "./ScatterChart.module.css";
import {
  ScatterChart as LChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  CustomTooltip,
  titleLegend,
  titleTooltip,
  COLORS,
  toTitlecase,
} from "../../../Utils/index.tsx";

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

const SHAPES = ["triangle", "diamond", "cross", "square"];

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
}) => {
  keys ??= [];
  console.log(xAxisKey);
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
          <XAxis type="category" dataKey={xAxisKey}>
            <Label value={xLabel} position="bottom" />
          </XAxis>

          <YAxis
            label={{ value: yLabel, angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="top" align="right" formatter={titleLegend} />
          {keys.map((point, index) => {
            console.log(dotRadius);
            return dataPoints[point] ? (
              <Scatter
                dataKey={point}
                stroke={
                  dataPoints[point].color ?? COLORS[index % COLORS.length]
                }
                strokeWidth={0}
                shape={SHAPES[index]}
                fill={COLORS[index % COLORS.length]}
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
