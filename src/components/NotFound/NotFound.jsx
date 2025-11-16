import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}
