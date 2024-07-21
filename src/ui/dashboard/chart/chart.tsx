"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type dataPoints = {
  weekday: string;
  visits: number;
  clicks: number;
};
const data: dataPoints[] = [
  {
    weekday: "8/7/2024",
    visits: 8390,
    clicks: 5917,
  },
  {
    weekday: "10/7/2024",
    visits: 580,
    clicks: 9109,
  },
  {
    weekday: "11/7/2024",
    visits: 3034,
    clicks: 3605,
  },
  {
    weekday: "8/7/2024",
    visits: 8341,
    clicks: 8943,
  },
  {
    weekday: "8/7/2024",
    visits: 1388,
    clicks: 632,
  },
  {
    weekday: "7/7/2024",
    visits: 5696,
    clicks: 3170,
  },
  {
    weekday: "9/7/2024",
    visits: 5792,
    clicks: 2777,
  },
  {
    weekday: "9/7/2024",
    visits: 1942,
    clicks: 2106,
  },
  {
    weekday: "8/7/2024",
    visits: 9656,
    clicks: 6703,
  },
  {
    weekday: "8/7/2024",
    visits: 21,
    clicks: 8608,
  },
];

const chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="weekday" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default chart;
