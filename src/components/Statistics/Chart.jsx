import {
  Area,
  Bar,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    { Category: "Laptops", 'Avg-Price': 1200, 'Unit-Sold': 1500, Rating: 4.2 },
    { Category: "Phones", 'Avg-Price': 800, 'Unit-Sold': 2500, Rating: 4.5 },
    { Category: "Accessories", 'Avg-Price': 150, 'Unit-Sold': 4000, Rating: 4.0 },
    { Category: "Smart Watches", 'Avg-Price': 300, 'Unit-Sold': 1800, Rating: 4.3 },
    { Category: "MacBook", 'Avg-Price': 1400, 'Unit-Sold': 1000, Rating: 4.6 },
    { Category: "iPhone", 'Avg-Price': 900, 'Unit-Sold': 2000, Rating: 4.7 },
  ];
  return (
    <ResponsiveContainer height="100%" width="100%">
      <ComposedChart height="100%" width="100%" data={data}>
        <XAxis dataKey={"Category"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey={"Avg-Price"}
          fill="#FAFAD2"
          stroke="#FFE000"
        />
        <Bar dataKey={"Unit-Sold"} fill="#9538e2" />
        <Line type="monotone" dataKey={"Rating"} stroke="#FF0000"></Line>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;