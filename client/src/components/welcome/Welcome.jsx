import { Link } from "react-router-dom";
import s from "./welcome.module.css";
import audio from "../../utils/audio/pikapika.mp3";
export default function Welcome() {
  let pika = new Audio(audio);

  return (
    <div className={s.landing}>
      <Link to="/home" onClick={() => pika.play()}>
        <p>INGRESAR</p>
      </Link>
    </div>
  );
}
