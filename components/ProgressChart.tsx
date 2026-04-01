"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ProgressChartProps {
    data: { name: string; value: number; color: string }[];
}

export default function ProgressChart({ data }: ProgressChartProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={data} innerRadius={35} outerRadius={50} dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
