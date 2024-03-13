import type { Story } from "@ladle/react";
import styles from "./LineChart.module.css";
import { toTitlecase } from "../../../Utils/index.tsx";
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
import { CustomTooltip, titleLegend, COLORS } from "../../../Utils/index.tsx";

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
  strokeWidth = 1,
}) => {
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
          <Legend verticalAlign="top" align="right" formatter={titleLegend} />
          {keys?.map((point, index) => {
            console.log(dotRadius);
            return (
              <Line
                dataKey={point}
                stroke={
                  dataPoints[point].color ?? COLORS[index % COLORS.length]
                }
                strokeWidth={strokeWidth}
                activeDot={{ r: dotRadius }}
              />
            );
          })}
        </LChart>
      </ResponsiveContainer>
    </div>
  );
};
