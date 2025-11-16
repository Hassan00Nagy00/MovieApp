import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetails.module.css";
import { mediaList } from "../../data/mediaList.js";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = mediaList.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="details-page">
        <h2>Movie not found!</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-inner">
        <img src={movie.img} alt={movie.title} />
        <div className="details-info">
          <h2>{movie.title}</h2>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating}
          </p>
          <Link to="/" className="back-btn">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
