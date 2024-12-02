"use client"
import React, { useMemo, useState } from "react";

interface ProgressProps {
  className?: string;
  progress: number;
  size?:number
}

export default function Progress(props: ProgressProps) {
  const {size = 80, progress} = props;
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  const fontSize = size * 0.25;

  const [colors, setColors] = useState({
    low: ["#f44336", "#641E16"],
    medium: ["#ff9800", "#B9770E"],
    high: ["#4caf50", "#1E8449"],
  });

  const progressColor = useMemo(() => {
    if (progress < 33) return colors.low;
    if (progress < 66) return colors.medium;
    return colors.high;
  }, [progress, colors]);


  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor[1]}
          strokeWidth={3}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor[0]}
          strokeWidth={3}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotación para empezar en la parte superior
        />

         <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={fontSize}
          fill="#FFF"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}
