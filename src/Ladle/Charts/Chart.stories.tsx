import type { Story } from "@ladle/react";
import { BarChart } from "../../Components/Charts/BarChart/BarChart.tsx";
import { PieChart } from "../../Components/Charts/PieChart/PieChart.tsx";
import { useState, useEffect } from "react";
import jsondata from "./sportsData.json";

type Props = {
  options: string;
  containerWidth: number;
  containerHeight: number;
  colors?: string[];
  keys?: string[];
  xAxisKey: string;
  xLabel: string;
  yLabel: string;
  title: string;
  customData: any[];
};

export const BarCharts: Story<Props> = ({
  containerWidth,
  containerHeight,
  colors,
  keys,
  xAxisKey,
  xLabel,
  yLabel,
  customData,
  title,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <BarChart
        id="chart"
        data={jsondata}
        name="bar"
        title={title}
        xAxisKey={xAxisKey}
        xLabel={xLabel}
        yLabel={yLabel}
        keys={keys}
        colors={colors}
        width={containerWidth}
        height={containerHeight}
        dataPoints={customData}
      ></BarChart>
      <div>{keys}</div>
    </div>
  );
};

function filterKeysByType(dataArray, dataType) {
  return dataArray.map((obj) =>
    Object.keys(obj).filter((key) => typeof obj[key] === dataType)
  );
}
const numberKeys = filterKeysByType(jsondata, "number");
BarCharts.args = {
  containerWidth: 100,
  containerHeight: 100,
  title: "Team Stats",
  xLabel: "#",
  yLabel: "#",
  colors: ["#DDCC77", "#CC6677", "#88CCEE"],
  customData: [
    {
      points_scored: { label: "Points Scored", color: "green" },
      assists: { label: "Points Scored", color: "blue" },
      games_played: { label: "Games Played" },
    },
  ],
};
BarCharts.argTypes = {
  keys: {
    options: filterKeysByType(jsondata, "number")[0],
    control: { type: "check" },
    defaultValue: ["points_scored"],
  },
  xAxisKey: {
    options: filterKeysByType(jsondata, "string")[0],
    control: { type: "radio" },
    defaultValue: "player_name",
  },
};

export const PieCharts: Story<Props> = ({}) => {
  return <PieChart></PieChart>;
};
