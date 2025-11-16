import React from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard.jsx";

export default function MovieList({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className={styles.noResults}>No movies found.</p>;
  }

  return (
    <div className={styles.movieList} role="list">
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
