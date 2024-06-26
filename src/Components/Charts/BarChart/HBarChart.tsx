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
  legendPos,
  domain,
  activeStroke = style.getPropertyValue("--main-bg-color"),
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
          />

          <XAxis type="number" domain={domain}>
            <Label value={xLabel} position="bottom" />
          </XAxis>

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
                dataKey={point}
                fill={customData[point].color ?? COLORS[index % COLORS.length]}
                activeBar={<Rectangle stroke={activeStroke} />}
              />
            );
          })}
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};
