// import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar/Navbar.jsx";
// import MovieList from "../MovieList/MovieList.jsx";
// import Footer from "../Footer/Footer.jsx";
// import Spinner from "../Spinner/Spinner.jsx";
// import { mediaList } from "../../data/mediaList.js";

// export default function Home() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 650);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredMovies =
//     selectedCategory === "all"
//       ? mediaList
//       : mediaList.filter((movie) => movie.genre === selectedCategory);

//   return (
//     <>
//       {/* <Navbar
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         genres={genres}
//       /> */}
//       <div className="container">
//         {loading ? <Spinner /> : <MovieList data={filteredMovies} />}
//       </div>
//       <Footer />
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList.jsx";
import Footer from "../Footer/Footer.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import { mediaList } from "../../data/mediaList.js";

export default function Home({ selectedCategory }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const filteredMovies =
    selectedCategory === "all"
      ? mediaList
      : mediaList.filter((movie) => movie.genre === selectedCategory);

  return (
    <>
      <div className="container">
        {loading ? <Spinner /> : <MovieList data={filteredMovies} />}
      </div>
      <Footer />
    </>
  );
}
