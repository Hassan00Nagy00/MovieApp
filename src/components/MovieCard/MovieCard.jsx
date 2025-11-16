import React from "react";
import styles from "./MovieCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cardSlice.js";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addToCart(movie));
    alert("Movie is added successfully");
  };

  return (
    <Link to={`/movie/${movie.id}`} className={styles.movieCard}>
      <div className={styles.thumbWrap}>
        <img
          src={movie.img}
          alt={movie.title}
          className={styles.thumb}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/300x450?text=No+Image";
          }}
        />
      </div>

      <div className={styles.meta}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.sub}>
          {movie.year} • {movie.genre}
        </p>

        <button type="button" className={styles.addBtn} onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
