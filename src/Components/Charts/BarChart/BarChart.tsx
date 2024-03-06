import type { Story } from "@ladle/react";
import styles from "./BarChart.module.css";
import { toTitlecase } from "../..";
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipTitle}>{`${label}`} </p>
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

export const BarChart: Story<Props> = ({
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
  // const data = jsondata;
  console.log(yLabel);
  // const dataKeys = data.length === 0 ? [] : Object.keys(data[0]);
  const dataKeys = data.length === 0 ? [] : Object.keys(dataPoints[0]);
  keys ??= [];
  dataPoints = dataPoints[0];

  const colors = ["#DDCC77", "#CC6677", "#88CCEE"];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p className={styles.title}>{title}</p>
      <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
        <BChart
          layout="vertical"
          // width={width}
          // height={height}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey={xAxisKey}>
            <Label value={xLabel} position="bottom" />
          </YAxis>

          <XAxis
            label={{ value: yLabel, angle: -90, position: "insideLeft" }}
          />
          {/* <Tooltip /> */}
          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="top" align="right" />
          {keys.map((point, index) => {
            console.log(point);
            return dataPoints[point] ? (
              <Bar
                dataKey={point}
                fill={dataPoints[point].color ?? colors[index]}
                activeBar={<Rectangle stroke="#4F84F7" />}
              />
            ) : (
              ""
            );
            // ) : (
            //   console.log("does not exist")
            // );
          })}
        </BChart>
      </ResponsiveContainer>
    </div>
  );
};
