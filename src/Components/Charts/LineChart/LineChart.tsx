import type { Story } from "@ladle/react";
import styles from "./LineChart.module.css";
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
  dotRadius: number;
  strokeWidth: number;
  legendPos?: { verticalAlign?: string; align?: string; height?: number };
  domain?: [string | number, string | number];
};

export const LineChart: Story<Props> = ({
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
  dotRadius,
  domain,
  legendPos,
  strokeWidth = 1,
}) => {
  return (
    <div id={id} style={{ width: "100%", height: "100%" }}>
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
            domain={domain}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            verticalAlign={legendPos?.verticalAlign ?? "top"}
            align={legendPos?.align ?? "right"}
            height={legendPos?.height ?? 32}
            formatter={titleLegend}
          />
          {keys?.map((point, index) => {
            return (
              <Line
                dataKey={point}
                stroke={
                  customData[point].color ?? COLORS[index % COLORS.length]
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
