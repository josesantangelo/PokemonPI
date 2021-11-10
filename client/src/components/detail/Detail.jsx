import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailedPokemon } from "../../store/actions/actions";
import s from "./detail.module.css";
import back from "../../utils/img/back.png";
export default function Detail() {
  let dispatch = useDispatch();
  const detailedPoke = useSelector((state) => state.detailedPokemon);
  useEffect(() => {
    return () => {
      dispatch(detailedPokemon(null));
    };
  }, []);
  let loading =
    "https://thumbs.gfycat.com/FaithfulShrillFairyfly-size_restricted.gif";

  let mapTypes = detailedPoke?.types?.map((element) => element.name);

  return (
    <>
      {!detailedPoke && (
        <div className={s.containerLoading}>
          <img src={loading} alt="poke"></img>
        </div>
      )}

      {detailedPoke && (
        <div className={s.container}>
          <div className={s.return}>
            <Link to="/home">
              <img src={back} alt="" />
            </Link>
          </div>
          <div className={s.card}>
            <div className={s.principal}>
              <img src={detailedPoke?.img} alt="Poke" />
              <h2>
                {detailedPoke?.name[0]?.toUpperCase() +
                  detailedPoke?.name?.slice(1)}
              </h2>
              <h3>{mapTypes?.join("/")}</h3>
              <h3>{`# ${detailedPoke?.id}`}</h3>
            </div>
            <div className={s.stats}>
              <h3>HP : {detailedPoke?.hp}</h3>
              <h3>ATTACK : {detailedPoke?.attack}</h3>
              <h3>DEFENSE : {detailedPoke?.defense}</h3>
              <h3>SPEED : {detailedPoke?.speed}</h3>
              <h3>WEIGHT : {detailedPoke?.weight}</h3>
              <h3>HEIGHT : {detailedPoke?.height}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

//     <div className={s.container}>
//

//   <div className={s.pokemon}>
//     <div className={s.general}>
//
//       <h2>{detailedPoke?.id}</h2>
//       <img src={detailedPoke?.img} alt="Poke" />
//
//     </div>

//     <div className={s.stats}>

//     </div>
//   </div>
// </div>
