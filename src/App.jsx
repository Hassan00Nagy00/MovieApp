// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home.jsx";
// import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";
// import NotFound from "./components/NotFound/NotFound.jsx";
// import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";
// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movie/:id" element={<MovieDetails />} />
//       <Route path="/register" element={<RegisterForm />} />
//       <Route path="/cart" element={<Cart />} />

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }
// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";
import Cart from "./components/Redux/Cart/Cart.jsx";
import { mediaList } from "./data/mediaList";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  let genres = ["all"];
  mediaList.forEach((item) => {
    if (!genres.includes(item.genre)) {
      genres.push(item.genre);
    }
  });

  return (
    <>
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        genres={genres}
      />

      <Routes>
        <Route
          path="/"
          element={<Home selectedCategory={selectedCategory} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
