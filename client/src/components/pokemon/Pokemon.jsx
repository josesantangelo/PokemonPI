import s from "./pokemon.module.css";

export default function Pokemon({ name, types, id, img }) {
  return (
    <div className={s.card}>
      <h3>{name}</h3>
      <h4>{types.join("/")}</h4>
      <h4>{id}</h4>
      <img src={img} alt="img poke" />
    </div>
  );
}
