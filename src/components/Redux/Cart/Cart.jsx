import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../cardSlice.js";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalItems = items.reduce((sum, it) => sum + (it.quantity || 1), 0);

  return (
    <div className="container">
      <h1 className={styles.title}>Your Cart</h1>

      {items.length === 0 ? (
        <div className={styles.empty}>
          <p>Your cart is empty.</p>
          <Link to="/" className={styles.backLink}>
            ← Back to movies
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.list}>
            {items.map((it) => (
              <div key={it.id} className={styles.row}>
                <img
                  src={it.img}
                  alt={it.title}
                  className={styles.thumb}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/120x180?text=No+Image";
                  }}
                />
                <div className={styles.info}>
                  <h3 className={styles.movieTitle}>{it.title}</h3>
                  <p className={styles.meta}>
                    {it.genre} • {it.year} • {it.rating}
                  </p>
                  <p className={styles.qty}>Quantity: {it.quantity || 1}</p>
                </div>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => handleRemove(it.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <div>
              Items: <strong>{totalItems}</strong>
            </div>
            <div className={styles.controls}>
              <Link to="/" className={styles.continue}>
                Continue browsing
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
