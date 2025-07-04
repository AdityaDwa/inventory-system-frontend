import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const customTooltipContent = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const tooltipData = [
      {
        name: "Working",
        value: payload.find((p) => p.name === "Working")?.value || 0,
        color: "#4ade80",
      },
      {
        name: "Repairable",
        value: payload.find((p) => p.name === "Repairable")?.value || 0,
        color: "#facc15",
      },
      {
        name: "Out of Order",
        value: payload.find((p) => p.name === "Out of Order")?.value || 0,
        color: "#f87171",
      },
    ];

    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "0.75rem",
          fontFamily: "Poppins",
          fontSize: "0.9rem",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {label}
        </p>
        {tooltipData.map((entry) => (
          <p
            key={entry.name}
            style={{
              marginBottom: 0,
              color: entry.color,
            }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default class OverviewChart extends PureComponent {
  render() {
    const { chartData, showLegend } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={true}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#4e5d70",
              fontFamily: "Poppins",
            }}
          />
          <YAxis
            axisLine={true}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#4e5d70",
              fontFamily: "Poppins",
            }}
          />
          <Tooltip
            content={customTooltipContent}
            contentStyle={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "0.75rem",
              fontFamily: "Poppins",
              fontSize: "0.9rem",
            }}
          />
          {showLegend && <Legend />}
          <Bar dataKey="Working" stackId="a" fill="#4ade80" />
          <Bar dataKey="Repairable" stackId="a" fill="#facc15" />
          <Bar dataKey="Out of Order" stackId="a" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
