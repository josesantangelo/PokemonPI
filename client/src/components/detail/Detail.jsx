import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailedPokemon } from "../../store/actions/actions";
import s from "./detail.module.css";
export default function Detail() {
  const detailedPoke = useSelector((state) => state.detailedPokemon);
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(detailedPokemon(null));
  // }, [dispatch, detailedPoke]);
  console.log("detailed ", detailedPoke);

  return (
    //ELEGIR MEJOR FORMA DE VALIDAR HAY VARIAS
    <div className={s.cardDetail}>
      {detailedPoke && (
        <div>
          <h1>{detailedPoke?.name} </h1>
          <h2>{detailedPoke?.id}</h2>
          <img src={detailedPoke?.img} alt="Poke" />
          <h2>{detailedPoke?.types.join("/")}</h2>
          <div className={s.stats}>
            <h3>HP : {detailedPoke?.hp}</h3>
            <h3>ATTACK : {detailedPoke?.attack}</h3>
            <h3>DEFENSE : {detailedPoke?.defense}</h3>
            <h3>SPEED : {detailedPoke?.speed}</h3>
            <h3>WEIGHT : {detailedPoke?.weight}</h3>
            <h3>HEIGHT : {detailedPoke?.height}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

// attack: 52;
// defense: 43;
// height: 6;
// hp: 39;
// id: 4;
// img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg";
// name: "charmander";
// speed: 65;
// types: ["fire"];
// weight: 85;
