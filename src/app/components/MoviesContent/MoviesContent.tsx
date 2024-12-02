import React from "react";
import styles from "./movies-content.module.css";
import MovieRow from "../MovieRow/MovieRow";
export default function MoviesContent() {
  return (
    <main className={styles.movies_content__main}>
      <MovieRow />
      <MovieRow />
      <MovieRow />
      <MovieRow />
      <MovieRow />

    </main>
  );
}


