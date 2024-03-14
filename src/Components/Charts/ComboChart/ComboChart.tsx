import type { Story } from "@ladle/react";
import styles from "./ComboChart.module.css";
import {
  ComposedChart as CChart,
  Bar,
  Line,
  Rectangle,
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
  COLORS,
} from "../chartutils/customRender.tsx";

type Props = {
  id?: string;
  data: string[];
  barKeys?: string[];
  dotKeys?: string[];
  width: number;
  height: number;
  xAxisKey: string;
  xLabel: string;
  yLabel: string;
  title?: string;
  dataPoints: any;
};

export const ComboChart: Story<Props> = ({
  id,
  data,
  width,
  height,
  barKeys,
  dotKeys,
  xAxisKey,
  dataPoints,
  title,
  xLabel,
  yLabel,
}) => {
  dataPoints = dataPoints[0];

  return (
    <div id={id} style={{ width: "100%", height: "100%" }}>
      <p className={styles.title}>{title}</p>
      <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
        <CChart
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
          {barKeys?.map((point, index) => {
            console.log(point);
            return (
              <Bar
                dataKey={point}
                fill={dataPoints[point].color ?? COLORS[index % COLORS.length]}
                activeBar={<Rectangle stroke="#4F84F7" />}
                maxBarSize={20}
              />
            );
          })}
          {dotKeys?.map((point, index) => {
            console.log(point);
            return (
              <Line
                type="monotone"
                dataKey={point}
                stroke={
                  dataPoints[point].color ?? COLORS[index % COLORS.length]
                }
                strokeWidth={2}
              />
            );
          })}
        </CChart>
      </ResponsiveContainer>
    </div>
  );
};
