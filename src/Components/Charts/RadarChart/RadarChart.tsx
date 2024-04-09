import type { Story } from "@ladle/react";
import styles from "./RadarChart.module.css";

import { CustomTooltip } from "../chartutils/customRender.tsx";
import {
  RadarChart as RChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  id?: string;
  data: string[];
  width: number;
  height: number;
  axisKey: string;
  valueKey: string;
  title?: string;
  strokeColor?: string;
  fillColor?: string;
};

var style = getComputedStyle(document.body);

export const RadarChart: Story<Props> = ({
  id,
  data,
  width,
  height,
  axisKey,
  valueKey,
  title,
  strokeColor = style.getPropertyValue("--main-bg-color"),
  fillColor = style.getPropertyValue("--main-hover-color"),
}) => {
  return (
    <div id={id} style={{ width: "100%", height: "100%" }}>
      <p className={styles.title}>{title}</p>
      <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
        <RChart
          data={data}
          outerRadius={150}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey={axisKey} label="a" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />

          <Tooltip content={CustomTooltip} />
          <Radar
            dataKey={valueKey}
            stroke={strokeColor}
            fill={fillColor}
            fillOpacity={0.6}
          />
        </RChart>
      </ResponsiveContainer>
    </div>
  );
};
