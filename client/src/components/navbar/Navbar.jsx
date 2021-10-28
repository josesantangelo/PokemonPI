import Dropdown from "../dropdown/Dropdown";
import Homeicon from "../homeIcon/Homeicon";
import Search from "../search/Search";
import s from "./navbar.module.css";
export default function Navbar() {
  return (
    <div className={s.navGeneral}>
      <div className={s.navLeft}>
        <Homeicon />
        <Dropdown />
      </div>

      <Search />
    </div>
  );
}
