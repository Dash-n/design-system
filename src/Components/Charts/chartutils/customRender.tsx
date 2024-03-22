import { toTitlecase } from "../../../Utils/toTitleCase";

export const COLORS = [
  "#88CCEE",
  "#DDCC77",
  "#CC6677",
  "#AA4499",
  "#882255",
  "#117733",
  "#332288",
  "#44AA99",
];

const Square = (props: any, index: number) => {
  const { cx, cy } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill={props.payload[index].color ?? COLORS[index % COLORS.length]}
      viewBox="0 0 20 20"
    >
      <polygon points="0,0 100,0 100,100 0,100" />
    </svg>
  );
};
const Circle = (props: any, index: number) => {
  const { cx, cy } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill={props.payload[index].color ?? COLORS[index % COLORS.length]}
      viewBox="0 0 20 20"
    >
      <circle r="10" cx="10" cy="10" />
    </svg>
  );
};
const Triangle = (props: any, index: number) => {
  const { cx, cy } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill={props.payload[index].color ?? COLORS[index % COLORS.length]}
      viewBox="0 0 100 100"
    >
      <polygon points="50,0 100,100 0,100" />
    </svg>
  );
};
const Star = (props: any, index: number) => {
  const { cx, cy } = props;

  return (
    <svg
      x={cx - 20}
      y={cy - 15}
      width={20}
      height={20}
      fill={props.payload[index].color ?? COLORS[index % COLORS.length]}
      viewBox="40 10 120 120"
    >
      <polygon points="100,10 60,132 160,52 40,52 140,132" />
    </svg>
  );
};

const SHAPES = [Square, Triangle, Circle, Star];

const customTooltip = {
  display: "flex",
  flexDirection: "column",
  padding: "0 16px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  border: "1px solid #c4c4c4",
};

const tooltipTitle = {
  fontSize: "20px",
  fontWeight: "400",
  textDecoration: "underline",
};

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={customTooltip}>
        <p style={tooltipTitle}>{label} </p>
        {payload.map((column) => {
          return <p>{`${toTitlecase(column.dataKey)}: ${column.value}`} </p>;
        })}
      </div>
    );
  }
  return null;
};

export const titleLegend = (value: string) => {
  return <span>{toTitlecase(value)}</span>;
};

const customLegendWrapper = {
  display: "flex",
  justifyContent: "end",
  gap: "8px",
};

export const customLegend = (props) => {
  const { payload } = props;

  return (
    <div style={customLegendWrapper}>
      {payload.map((entry, index) => (
        <div
          style={{
            display: "flex",
            gap: "4px",
            color: entry.payload.fill ?? COLORS[index % COLORS.length],
          }}
          key={`item-${index}`}
        >
          {SHAPES[index](props, index)}
          {toTitlecase(entry.value)}
        </div>
      ))}
    </div>
  );
};
