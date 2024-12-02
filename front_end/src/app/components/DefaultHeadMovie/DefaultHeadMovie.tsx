"use client";
import React from "react";
import DefaultMovie from "./default_movie.jpg";
import Image from "next/image";
import { cn } from "@/utils";
import styles from "./default-movie.module.css";
import { Progress } from "@/Components";

export default function DefaultHeadMovie() {
  return (
    <div className={cn("w-full relative", styles.default__main)}>
      <Image
        src={DefaultMovie}
        width={800}
        height={600}
        alt="default movie"
        className={cn("w-full h-full")}
        priority
      />

      <div
        className={cn("absolute inset-0 flex", styles.default_info__content)}
      >
        <div className={cn(styles.default__info)}>
          <h1>Kung Fu Panda 4</h1>
          <p>
            Join Po and the furious Five on a new epic adventure! Discover the
            power of friendship and the strngth within! Get ready to unleash
            your inner warrior! 🐻✨
          </p>
        </div>
        <div className={cn(styles.default__info_stats)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <Progress progress={97} />
        </div>
      </div>
    </div>
  );
}
