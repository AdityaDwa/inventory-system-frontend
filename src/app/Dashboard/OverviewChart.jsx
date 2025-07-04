import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  {
    name: "DoECE",
    Working: 7,
    Repairable: 2,
    "Out of Order": 1,
  },
];

export default class OverviewChart extends PureComponent {
  render() {
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
            contentStyle={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "0.75rem",
              fontFamily: "Poppins",
              fontSize: "0.9rem",
            }}
          />
          <Bar dataKey="Working" stackId="a" fill="#4ade80" />
          <Bar dataKey="Repairable" stackId="a" fill="#facc15" />
          <Bar dataKey="Out of Order" stackId="a" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
