import type { Story } from "@ladle/react";
import { BarChart } from "../../Components/Charts/BarChart/BarChart.tsx";
import { RadarChart } from "../../Components/Charts/RadarChart/RadarChart.tsx";
import { StackedBarChart } from "../../Components/Charts/StackedBarChart/StackedBarChart.tsx";
import { PieChart } from "../../Components/Charts/PieChart/PieChart.tsx";
import { LineChart } from "../../Components/Charts/LineChart/LineChart.tsx";
import { useState, useEffect } from "react";
import jsondata from "./sportsData.json";
import exercisedata from "./exerciseStats.json";

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
  dotRadius: number;
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
    defaultValue: ["points_scored", "assists", "games_played"],
  },
  xAxisKey: {
    options: filterKeysByType(jsondata, "string")[0],
    control: { type: "radio" },
    defaultValue: "player_name",
  },
};

export const PieCharts: Story<Props> = ({
  containerHeight,
  containerWidth,
}) => {
  return (
    <PieChart
      data={jsondata}
      title="Title"
      nameKey="player_name"
      dataKey="points_scored"
      width={containerWidth}
      height={containerHeight}
    ></PieChart>
  );
};
PieCharts.args = {
  containerWidth: 100,
  containerHeight: 100,
  title: "Personal Stats",
  // colors: ["#DDCC77", "#CC6677", "#88CCEE"],
};

export const StackedBarCharts: Story<Props> = ({
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
      <StackedBarChart
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
      ></StackedBarChart>
      <div>{keys}</div>
    </div>
  );
};
StackedBarCharts.args = {
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
StackedBarCharts.argTypes = {
  keys: {
    options: filterKeysByType(jsondata, "number")[0],
    control: { type: "check" },
    defaultValue: ["points_scored", "assists", "games_played"],
  },
  xAxisKey: {
    options: filterKeysByType(jsondata, "string")[0],
    control: { type: "radio" },
    defaultValue: "player_name",
  },
};

export const LineCharts: Story<Props> = ({
  containerWidth,
  containerHeight,
  colors,
  keys,
  xAxisKey,
  xLabel,
  yLabel,
  customData,
  title,
  dotRadius,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <LineChart
        id="chart"
        data={jsondata}
        // name="bar"
        title={title}
        xAxisKey={xAxisKey}
        xLabel={xLabel}
        yLabel={yLabel}
        keys={keys}
        dotRadius={dotRadius}
        colors={colors}
        width={containerWidth}
        height={containerHeight}
        dataPoints={customData}
      ></LineChart>
      <div>{keys}</div>
    </div>
  );
};
LineCharts.args = {
  containerWidth: 100,
  containerHeight: 100,
  title: "Team Stats",
  dotRadius: 8,
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
LineCharts.argTypes = {
  keys: {
    options: filterKeysByType(jsondata, "number")[0],
    control: { type: "check" },
    defaultValue: ["points_scored", "assists", "games_played"],
  },
  xAxisKey: {
    options: filterKeysByType(jsondata, "string")[0],
    control: { type: "radio" },
    defaultValue: "player_name",
  },
};

type RadarProps = {
  id: string;
  name: string;
  data: string[];
  containerWidth: number;
  containerHeight: number;
  axisKey: string;
  valueKey: string;
  title?: string;
};

export const RadarCharts: Story<RadarProps> = ({
  containerWidth,
  containerHeight,
  axisKey,
  valueKey,
  title,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <RadarChart
        id="chart"
        title={title}
        width={containerWidth}
        height={containerHeight}
        data={exercisedata}
        valueKey={valueKey}
        axisKey={axisKey}
      ></RadarChart>
    </div>
  );
};
RadarCharts.args = {
  containerWidth: 100,
  containerHeight: 100,
  title: "Personal Stats",
  valueKey: "value",
  axisKey: "exercise",
  // colors: ["#DDCC77", "#CC6677", "#88CCEE"],
};
