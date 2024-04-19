import type { Story } from "@ladle/react";
import styles from "./ScatterChart.module.css";
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
  customLegend,
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
  legendPos?: { verticalAlign?: string; align?: string; height?: number };
  dotRadius: number;
};

const Square = (props: any) => {
  const { cx, cy, value, fill } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={200}
      height={200}
      fill={fill}
      viewBox="0 0 1024 1024"
    >
      <polygon points="0,0 100,0 100,100 0,100" />
    </svg>
  );
};
const Circle = (props: any) => {
  const { cx, cy, value, fill } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={200}
      height={200}
      fill={fill}
      viewBox="0 0 1024 1024"
    >
      <circle r="45" cx="50" cy="50" />
    </svg>
  );
};
const Triangle = (props: any) => {
  const { cx, cy, value, fill } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={200}
      height={200}
      fill={fill}
      viewBox="0 0 1024 1024"
    >
      <polygon points="50,0 100,90 0,90" />
    </svg>
  );
};
const Star = (props: any) => {
  const { cx, cy, value, fill } = props;

  return (
    <svg
      x={cx - 20}
      y={cy - 15}
      width={200}
      height={200}
      fill={fill}
      viewBox="0 0 1024 1024"
    >
      <polygon points="100,10 60,132 160,52 40,52 140,132" />{" "}
    </svg>
  );
};

const SHAPES = [Square, Triangle, Circle, Star];

export const ScatterChart: Story<Props> = ({
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
  legendPos,
  dotRadius,
}) => {
  keys ??= [];

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
          <XAxis type="category" dataKey={xAxisKey}>
            <Label value={xLabel} position="bottom" />
          </XAxis>

          <YAxis
            label={{ value: yLabel, angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            verticalAlign={legendPos?.verticalAlign ?? "top"}
            align={legendPos?.align ?? "right"}
            height={legendPos?.height ?? 32}
            content={customLegend}
          />
          {keys?.map((point, index) => {
            return (
              <Line
                dataKey={point}
                stroke={
                  customData[point].color ?? COLORS[index % COLORS.length]
                }
                strokeWidth={0}
                dot={SHAPES[index]}
                fill={customData[point].color ?? COLORS[index % COLORS.length]}
              />
            );
          })}
        </LChart>
      </ResponsiveContainer>
    </div>
  );
};
