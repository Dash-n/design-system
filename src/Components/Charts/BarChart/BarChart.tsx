import type { Story } from "@ladle/react";
import styles from "./BarChart.module.css";
import {
  BarChart as BChart,
  Bar,
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
  keys?: string[];
  width: number;
  height: number;
  xAxisKey: string;
  xLabel: string;
  yLabel: string;
  title?: string;
  dataPoints: any;
};

export const BarChart: Story<Props> = ({
  id,
  data,
  width,
  height,
  keys,
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
        <BChart
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
            return (
              <Bar
                dataKey={point}
                fill={dataPoints[point].color ?? COLORS[index % COLORS.length]}
                activeBar={<Rectangle stroke="#4F84F7" />}
              />
            );
          })}
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};
