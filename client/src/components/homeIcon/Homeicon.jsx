import image from "../../utils/img/home.svg";
import { Link } from "react-router-dom";
import s from "./homeicon.module.css";
export default function Homeicon() {
  return (
    <div>
      <Link to="/">
        <img src={image} alt="" className={s.homeicon} />
      </Link>
    </div>
  );
}
