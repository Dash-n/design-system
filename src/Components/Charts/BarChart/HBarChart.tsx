import type { Story } from "@ladle/react";
import styles from "./BarChart.module.css";
import { toTitlecase } from "../..";
import {
  BarChart as BChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Cell,
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
};

export const HBarChart: Story<Props> = ({
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
  keys ??= [];
  dataPoints = dataPoints[0];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p className={styles.title}>{title}</p>
      <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
        <BChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey={xAxisKey} type="category">
            {/* orientation="right" */}
            <Label value={xLabel} position="bottom" />
          </YAxis>

          <XAxis
            type="number"
            // label={{ value: yLabel, angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="top" align="right" />

          {keys.map((point, index) => {
            console.log(point);
            return dataPoints[point] ? (
              <Bar
                dataKey={point}
                fill={dataPoints[point].color ?? COLORS[index % COLORS.length]}
                activeBar={<Rectangle stroke="#4F84F7" />}
              />
            ) : (
              ""
            );
          })}
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};
