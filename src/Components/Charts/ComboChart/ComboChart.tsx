import type { Story } from "@ladle/react";
import styles from "./ComboChart.module.css";
import { toTitlecase } from "../../index.tsx";
import {
  ComposedChart as CChart,
  Bar,
  Line,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "../../index.tsx";

type Props = {
  id: string;
  name: string;
  data: string[];
  barKeys?: string[];
  dotKeys?: string[];
  width: number;
  height: number;
  xAxisKey: string;
  xLabel: string;
  yLabel: string;
  title?: string;
  dataPoints: any;
};

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className={styles.customTooltip}>
//         <p className={styles.tooltipTitle}>{`${label}`} </p>
//         {payload.map((column) => {
//           console.log(column);
//           return (
//             <p className={styles.label}>
//               {`${toTitlecase(column.name)}: ${column.value}`}{" "}
//             </p>
//           );
//         })}
//       </div>
//     );
//   }
//   return null;
// };

export const ComboChart: Story<Props> = ({
  data,
  width,
  height,
  barKeys,
  dotKeys,
  xAxisKey,
  dataPoints,
  title,
  xLabel,
  yLabel,
}) => {
  // keys ??= [];
  dataPoints = dataPoints[0];

  const COLORS = ["#DDCC77", "#CC6677", "#88CCEE"];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p className={styles.title}>{title}</p>
      <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
        <CChart
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
          <Legend verticalAlign="top" align="right" />
          {barKeys.map((point, index) => {
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
          {dotKeys.map((point, index) => {
            console.log(point);
            return dataPoints[point] ? (
              <Line type="monotone" dataKey={point} stroke="#4F84F7" />
            ) : (
              ""
            );
          })}
        </CChart>
      </ResponsiveContainer>
    </div>
  );
};
