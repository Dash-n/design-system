import type { Story } from "@ladle/react";
import styles from "./PieChart.module.css";
import {
  PieChart as PChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";
import { COLORS } from "../chartutils/customRender.tsx";
import { toTitlecase } from "../../../Utils/toTitleCase.ts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

type Props = {
  id?: string;
  data: string[];
  dataKey: string[];
  nameKey: string[];
  width: number;
  height: number;
  valueKey: string;
  title?: string;
};

type LabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

const PieTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p>
          {`${toTitlecase(String(payload[0].name ?? ""))}: ${payload[0].value}`}{" "}
        </p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: LabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChart: Story<Props> = ({
  id,
  data,
  dataKey,
  nameKey,
  title,
  width,
  height,
}) => {
  {
    return (
      <div id={id} style={{ width: "100%", height: "100%" }}>
        <p className={styles.title}>{title}</p>
        <ResponsiveContainer width={`${width}%`} height={`${height}%`}>
          <PChart>
            <Tooltip content={<PieTooltip />} />
            <Legend verticalAlign="middle" align="right" layout="vertical" />
            <Pie
              data={data}
              cx="40%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius="55%"
              outerRadius="100%-48px"
              dataKey={dataKey}
              nameKey={nameKey}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PChart>
        </ResponsiveContainer>
      </div>
    );
  }
};
