import type { Story } from "@ladle/react";
import styles from "./RadarChart.module.css";
import { toTitlecase } from "../..";
import {
  RadarChart as RChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  id: string;
  name: string;
  data: string[];
  width: number;
  height: number;
  axisKey: string;
  valueKey: string;
  title?: string;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipTitle}>{`${toTitlecase(label)}`} </p>
        {payload.map((column) => {
          console.log(column);
          return (
            <p className={styles.label}>
              {`${toTitlecase(column.name)}: ${column.value}`}{" "}
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};

export const RadarChart: Story<Props> = ({
  data,
  width,
  height,
  axisKey,
  valueKey,
  title,
}) => {
  const COLORS = ["#DDCC77", "#CC6677", "#88CCEE"];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p className={styles.title}>{title}</p>
      <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
        <RChart
          data={data}
          outerRadius={100}
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
            name="a"
            dataKey={valueKey}
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RChart>
      </ResponsiveContainer>
    </div>
  );
};
