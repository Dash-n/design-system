export const toTitlecase = (label: string) => {
  return label
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    })
    .replace(/_\w/g, function (txt) {
      return " " + txt.substring(1).toUpperCase();
    });
};

// import { Tooltip } from "recharts";

const storyDiv = {
  display: "flex",
  gap: "8px",
  width: "600px",
  flexDirection: "row",
};

const customTooltip = {
  display: "flex",
  padding: "1px 8px",
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
        <p style={tooltipTitle}>{`${label}`} </p>
        {payload.map((column) => {
          console.log(column);
          return <p>{`${toTitlecase(column.name)}: ${column.value}`} </p>;
        })}
      </div>
    );
  }
  return null;
};
