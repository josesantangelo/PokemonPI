import Pokemons from "../pokemons/Pokemons";
import AsideTypes from "../asideTypes/AsydeTypes";
import s from "./bodyContainer.module.css";
export default function BodyContainer() {
  return (
    <div className={s.bodyContainer}>
      <AsideTypes />
      <Pokemons />
    </div>
  );
}
