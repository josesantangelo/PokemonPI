import s from "./type.module.css";
export default function Type({ name }) {
  return <h2 className={s.type}>{name.toUpperCase()}</h2>;
}
