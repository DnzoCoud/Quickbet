import React from "react";
import styles from "./movie-card.module.css";
import Image from "next/image";
import ShrekPoster from "./Shrek-poster.webp";
import { Progress } from "@/Components";

export default function MovieCard() {
  return (
    <div className={styles.movie_card__main}>
      <Image src={ShrekPoster} alt="Poster shrek" width={760} height={1154} />
      <div className={styles.movie_card__info}>
        <span>
          <h2>Shrek 5</h2>
          <small>August 1, 2024</small>
        </span>
        
        <div className={styles.movie_card_info__rate}>
          <div>
            <small>Rating</small>
            <Progress size={40} progress={20}/>
          </div>
          <div>
            <small>Favorites</small>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
