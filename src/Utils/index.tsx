export const toTitlecase = (label: string) => {
  return label
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    })
    .replace(/_\w/g, function (txt) {
      return " " + txt.substring(1).toUpperCase();
    });
};

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
    console.log(label);
    console.log(payload);
    return (
      <div style={customTooltip}>
        <p style={tooltipTitle}>{label} </p>
        {payload.map((column, index) => {
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

export const titleTooltip = (value, name, props) => {
  console.log(value);
  console.log(name);
  console.log(props);
  // return <span>{toTitlecase(value)}</span>;
};
