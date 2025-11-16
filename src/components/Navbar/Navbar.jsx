// import React from "react";
// import { mediaList } from "../../data/mediaList.js";
// import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar({ selectedCategory, setSelectedCategory }) {
//   const genres = ["all"];
//   mediaList.forEach((item) => {
//     if (!genres.includes(item.genre)) {
//       genres.push(item.genre);
//     }
//   });

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>MovieStudio</div>

//       <nav className={styles.navLinks}>
//         {genres.map((g) => (
//           <button
//             key={g}
//             onClick={() => setSelectedCategory(g)}
//             type="button"
//             className={
//               selectedCategory === g
//                 ? `${styles.button} ${styles.active}`
//                 : styles.button
//             }
//           >
//             {g}
//           </button>
//         ))}

//         <Link to="/register" className={styles.registerLink}>
//           Register
//         </Link>

//         <div to="/cart" className={styles.cartIcon}>
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </div>
//       </nav>
//     </header>
//   );
// }
// src/components/Navbar.jsx
import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({
  selectedCategory,
  setSelectedCategory,
  genres,
}) {
  console.log("Genres in Navbar.jsx:", genres);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Movie App
      </Link>

      <nav className={styles.nav}>
        {genres.map((g) => (
          <button
            key={g}
            className={`${styles.navBtn} ${
              selectedCategory === g ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(g)}
          >
            {g}
          </button>
        ))}
      </nav>

      <div className={styles.cartArea}>
        <Link to="/cart" className={styles.cartIcon}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </header>
  );
}
