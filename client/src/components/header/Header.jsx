import image from "../../utils/img/home.svg";
import { Link } from "react-router-dom";
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
