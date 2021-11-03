import { Link } from "react-router-dom";

import Homeicon from "../homeIcon/Homeicon";
import Search from "../search/Search";
import s from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={s.navGeneral}>
      <div className={s.navLeft}>
        <Homeicon />

        <Link to="/form">CREA TU POKEMON </Link>
      </div>

      <Search />
    </div>
  );
}
