/* eslint-disable */
"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts"

const data = [
  {
      name: "sehat",
      total: Math.floor(Math.random() * 5000) + 100,
      cellProps: { fill: "green" },
  },
  {
      name: "sakit",
      total: Math.floor(Math.random() * 5000) + 100,
      cellProps: { fill: "yellow" },
  },
  {
      name: "kronis",
      total: Math.floor(Math.random() * 5000) + 100,
      cellProps: { fill: "red" },
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={true}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={true}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total">
          {data.map((entry, index) => (
            <Cell {...entry.cellProps}/>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
