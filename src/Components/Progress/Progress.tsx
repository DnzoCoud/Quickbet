import { cn } from "@/utils";
import React from "react";
import styles from "./progress.module.css";

interface ProgressProps {
  className?: string;
  progress: number;
}

export default function Progress(props: ProgressProps) {
  const size = 80;
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (props.progress / 100) * circumference;
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
          stroke="#e6e6e6"
          strokeWidth={5}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={"#4caf50"}
          strokeWidth={5}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotación para empezar en la parte superior
        />

        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize="22"
          fill="#FFF"
        >
          {props.progress}%
        </text>
      </svg>
    </div>
  );
}
