import Paginado from "../paginado/Paginado.jsx";
import Filters from "../filters/Filters.jsx";
import Navbar from "../navbar/Navbar.jsx";
import image from "../../utils/img/home.svg";
import { Link, useHistory } from "react-router-dom";
import s from "./header.module.css";
export default function Header() {
  return (
    <header className={s.container}>
      <Link to="/">
        <img src={image} alt="" className={s.homeicon} />
      </Link>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
        alt=""
      />

      <div></div>
    </header>
  );
}

// {
//   /* <Navbar /> */
// }
// {
//   /* <Filters /> */
// }
// {
//   /* <Paginado /> */
// }
