import React from "react";
import styles from "./movies-layout.module.css";

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label="Sección de información de las peliculas"
      className={styles.section__main}
    >
      {children}
    </section>
  );
}
