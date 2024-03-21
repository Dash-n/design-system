import type { Story } from "@ladle/react";
import styles from "./BarChart.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase.ts";
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
  customData: any;
};

export const HBarChart: Story<Props> = ({
  id,
  data,
  width,
  height,
  keys,
  xAxisKey,
  customData,
  title,
  xLabel,
  yLabel,
}) => {
  return (
    <div id={id} style={{ width: "100%", height: "100%" }}>
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
          <YAxis
            dataKey={xAxisKey}
            type="category"
            label={{ value: yLabel, position: "top" }}
          ></YAxis>

          <XAxis type="number">
            <Label value={xLabel} position="bottom" />
          </XAxis>

          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="top" align="right" formatter={titleLegend} />

          {keys?.map((point, index) => {
            return (
              <Bar
                dataKey={point}
                fill={customData[point].color ?? COLORS[index % COLORS.length]}
                activeBar={<Rectangle stroke="#4F84F7" />}
              />
            );
          })}
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};
