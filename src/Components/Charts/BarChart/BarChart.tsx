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
import {
  VerticalAlignmentType,
  HorizontalAlignmentType,
} from "recharts/types/component/DefaultLegendContent";

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
  legendPos?: {
    verticalAlign?: VerticalAlignmentType;
    align?: HorizontalAlignmentType;
    height?: number;
  };
  domain?: [string | number, string | number];
  activeStroke?: string;
};

const style = getComputedStyle(document.body);

export const BarChart: Story<Props> = ({
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
  domain = ["auto", "auto"],
  activeStroke = style.getPropertyValue("--main-bg-color"),
}) => {
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
            domain={domain}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            verticalAlign={legendPos?.verticalAlign ?? "top"}
            align={legendPos?.align ?? "right"}
            height={legendPos?.height ?? 50}
            formatter={titleLegend}
          />
          {keys?.map((point, index) => {
            return (
              <Bar
                shape={<Rectangle radius={[8, 8, 0, 0]} />}
                dataKey={point}
                fill={customData[point].color ?? COLORS[index % COLORS.length]}
                activeBar={
                  <Rectangle stroke={activeStroke} radius={[8, 8, 0, 0]} />
                }
              />
            );
          })}
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};
