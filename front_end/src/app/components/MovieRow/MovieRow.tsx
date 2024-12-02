"use client";
import React, { useRef, useState } from "react";
import styles from "./movie-row.module.css";
import { MovieCard } from "../MovieCard";

export default function MovieRow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const container = containerRef.current;
    if (container) {
      const pageX = "pageX" in e ? e.pageX : e.touches[0].pageX; // Detecta mouse o touch
      setStartX(pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    e.preventDefault();

    const container = containerRef.current;
    if (container) {
      const pageX = "pageX" in e ? e.pageX : e.touches[0].pageX;
      const x = pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className={styles.movie_row__main}>
      <h1>Category</h1>
      <div
        className={styles.card__carrousel}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUpOrLeave}
        onTouchMove={handleMouseMove}
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}
