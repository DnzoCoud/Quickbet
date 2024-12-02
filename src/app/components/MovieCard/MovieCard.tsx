import React from "react";
import styles from "./movie-card.module.css";
import Image from "next/image";
import ShrekPoster from "./Shrek-poster.webp";

export default function MovieCard() {
  return (
    <div className={styles.movie_card__main}>
      <Image src={ShrekPoster} alt="Poster shrek" width={760} height={1154} />
      <div>
        <span>Shrek 5</span>
        <small>August 1, 2024</small>
        <div>
          <span>Rating</span>
        </div>
      </div>
    </div>
  );
}
