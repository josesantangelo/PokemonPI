import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import back from "../../utils/img/back.png";
import s from "./form.module.css";
import { alphabeticOrder } from "../../utils/functions.js";
const Form = () => {
  const types = useSelector((state) => state.types);
  let defaultImage =
    "http://assets.stickpng.com/images/5a4613ddd099a2ad03f9c994.png";
  const [form, setForm] = useState({
    name: "",
    hp: 1,
    attack: 1,
    defense: 1,
    speed: 1,
    height: 1,
    weight: 1,
    type1: "",
    type2: "",
    img: defaultImage,
  });
  const [error, setError] = useState({
    name: "",
    hp: null,
    attack: null,
    defense: null,
    speed: null,
    height: null,
    weight: null,
    type1: null,
    type2: null,
    img: null,
  });
  const [loading, setLoading] = useState(false);

  const createPokemon = async (e) => {
    e.preventDefault();
    setLoading(true);
    let check = await checkName(form.name);
    setLoading(false);
    if (check) {
      return alert("Ese pokemon ya existe!");
    } else {
      try {
        await axios
          .post("http://localhost:3001/pokemons", form)
          .then(alert("exito!"));
      } catch (error) {
        alert("error!");
      }
    }
  };

  const onChange = (e) => {
    const { value, name, type } = e.target;

    setForm({
      ...form,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const onChangeStat = (e) => {
    const { value, name, type } = e.target;
    if (value > 0 && value < 100) {
      setForm({
        ...form,
        [name]: type === "number" ? Number(value) : value,
      });
    } else {
      setError({
        ...error,
        [name]: "Numero e/ 0 y 100",
      });
    }
  };

  const checkName = async (value) => {
    let poke = await axios.get(
      `http://localhost:3001/pokemons?name=${value.toLowerCase()}`
    );
    let name = poke.data.name;

    if (name) {
      setError({
        ...error,
        name: `${poke.data.name} ya existe.`,
      });
      setForm({
        ...form,
        name: "",
      });
      return true;
    } else {
      return false;
    }
  };
  let sortedTypes = alphabeticOrder(types, "a");
  return (
    <div className={s.container}>
      <div className={s.return}>
        <Link to="/home">
          <img src={back} alt="" />
        </Link>
      </div>
      <form className={s.card} onSubmit={createPokemon}>
        <div className={s.form}>
          <label>Name: </label>
          <input
            className={s.input}
            type="text"
            name="name"
            value={form.name}
            autoFocus
            autoComplete="off"
            onChange={onChange}
            // onFocus={() => setError({ ...error, name: "Ok" })}
            onBlur={() => {
              checkName(form.name);
            }}
          />
          {error.name.length && !form.name.length ? (
            <span>{error.name}</span>
          ) : null}
          {!error.name.length && !form.name.length ? (
            <span>* Campo obligatorio</span>
          ) : null}
          {form.name.length &&
          (error.name.includes("existe") || !error.name) ? (
            <span className={s.notErrorSpan}>Ok</span>
          ) : null}

          <label> Type 1:</label>
          <select
            type="number"
            name="type1"
            id=""
            defaultValue=""
            onChange={onChange}
          >
            <option value="" disabled></option>
            {sortedTypes.map((element) => {
              return <option value={element.id_api}>{element.name}</option>;
            })}
          </select>
          {!form.type1.length ? (
            <span>* Campo obligatorio</span>
          ) : (
            <span className={s.notErrorSpan}>Ok</span>
          )}

          <label>Type 2:</label>
          <select
            type="number"
            defaultValue=""
            name="type2"
            id=""
            onChange={onChange}
          >
            <option value=""></option>
            {sortedTypes.map((element) => {
              return <option value={element.id_api}>{element.name}</option>;
            })}
          </select>
          <span className={s.notErrorSpan}>Ok</span>
          <label>Url Image:</label>
          <input
            type="url"
            name="img"
            onChange={onChange}
            autoComplete="off"
            // value={form.img}
          />
          {form.img === defaultImage ? (
            <span className={s.notErrorSpan}>Default image</span>
          ) : (
            <span className={s.notErrorSpan}>Custom image</span>
          )}

          <label>HP: </label>
          <input
            className={s.input}
            type="number"
            min="1"
            max="100"
            name="hp"
            value={form.hp}
            onChange={onChangeStat}
          />
          {error.hp && (form.hp <= 0 || form.hp > 100) ? (
            <span className={s.errorSpan}>{error.hp}</span>
          ) : (
            <span className={s.notErrorSpan}>Ok</span>
          )}
          <label>Attack: </label>
          <input
            className={s.input}
            type="number"
            min="1"
            max="100"
            name="attack"
            value={form.attack}
            onChange={onChangeStat}
          />
          {error.attack && (form.attack <= 0 || form.attack > 100) ? (
            <span className={s.errorSpan}>{error.attack}</span>
          ) : (
            <span className={s.notErrorSpan}>Ok</span>
          )}
          <label>Defense: </label>
          <input
            className={s.input}
            type="number"
            min="1"
            max="100"
            name="defense"
            value={form.defense}
            onChange={onChange}
          />
          {error.defense && (form.defense <= 0 || form.defense > 100) ? (
            <span className={s.errorSpan}>{error.defense}</span>
          ) : (
            <span className={s.notErrorSpan}>Ok</span>
          )}
          <label>Speed: </label>
          <input
            className={s.input}
            type="number"
            min="1"
            max="100"
            name="speed"
            value={form.speed}
            onChange={onChange}
          />
          {error.speed && (form.speed <= 0 || form.speed > 100) ? (
            <span className={s.errorSpan}>{error.speed}</span>
          ) : (
            <span className={s.notErrorSpan}>Ok</span>
          )}
          <label>Height: </label>
          <input
            className={s.input}
            type="number"
            min="1"
            max="100"
            name="height"
            value={form.height}
            onChange={onChange}
          />
          {error.height && (form.height <= 0 || form.height > 100) ? (
            <span className={s.errorSpan}>{error.height}</span>
          ) : (
            <span className={s.notErrorSpan}>Ok</span>
          )}
          <label>Weight: </label>
          <input
            className={s.input}
            type="number"
            min="1"
            max="100"
            name="weight"
            value={form.weight}
            onChange={onChange}
          />
          {error.weight && (form.weight <= 0 || form.weight > 100) ? (
            <span className={s.errorSpan}>{error.weight}</span>
          ) : (
            <span className={s.notErrorSpan}>Ok</span>
          )}
        </div>
        {!loading && (
          <div className={s.submitTrue}>
            {form.name !== "" &&
            form.type1 &&
            form.hp > 0 &&
            form.attack > 0 &&
            form.defense > 0 &&
            form.speed > 0 &&
            form.height > 0 &&
            form.weight > 0 ? (
              <input
                className={s.submitTrue}
                type="submit"
                disabled={false}
                value="Crear Pokemon!"
              />
            ) : (
              <input
                className={s.submitFalse}
                type="submit"
                disabled={true}
                value="Crear Pokemon!"
              />
            )}
          </div>
        )}
        {loading && (
          <div class={s.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;

// <div className={s.container}>
//   <div className={s.return}>
//     <Link to="/home">
//       <img src={back} alt="" />
//     </Link>
//   </div>

//   <form className={s.card} onSubmit={createPokemon}>
//     <div className={s.form}>
//       <div className={s.label}>
//         <label>Name: </label>
//         <label> Type 1</label>
//         <label>Type 2</label>
//         <label>Url Image</label>
//         <label>Hp: </label>
//         <label>Attack: </label>
//         <label>Defense: </label>
//         <label>Speed: </label>
//         <label>Height: </label>
//         <label>Weight: </label>
//       </div>
//       <div className={s.inputs}>
// <input
//   className={s.input}
//   type="text"
//   name="name"
//   value={form.name}
//   autoFocus
//   autoComplete="off"
//   onChange={onChange}
//   onBlur={() => checkName(form.name)}
// />
// <select type="number" name="type1" id="" onChange={onChange}>
//   {/* <option value="" selected disabled></option> */}
//   {types.sort(sorterOne).map((element) => {
//     return <option value={element.id_api}>{element.name}</option>;
//   })}
// </select>
// <select type="number" name="type2" id="" onChange={onChange}>
//   <option value="" selected disabled></option>
//   {types.map((element) => {
//     return <option value={element.id_api}>{element.name}</option>;
//   })}
// </select>
// <input
//   type="url"
//   name="img"
//   onChange={onChange}
//   autoComplete="off"
//   // value={form.img}
// />
// <input
//   className={s.input}
//   type="number"
//   min="1"
//   max="100"
//   name="hp"
//   value={form.hp}
//   onChange={onChange}
// />
// <input
//   className={s.input}
//   type="number"
//   min="1"
//   max="100"
//   name="attack"
//   value={form.attack}
//   onChange={onChange}
// />
// <input
//   className={s.input}
//   type="number"
//   min="1"
//   max="100"
//   name="defense"
//   value={form.defense}
//   onChange={onChange}
// />
// <input
//   className={s.input}
//   type="number"
//   min="1"
//   max="100"
//   name="speed"
//   value={form.speed}
//   onChange={onChange}
// />
// <input
//   className={s.input}
//   type="number"
//   min="1"
//   max="100"
//   name="height"
//   value={form.height}
//   onChange={onChange}
// />
// <input
//   className={s.input}
//   type="number"
//   min="1"
//   max="100"
//   name="weight"
//   value={form.weight}
//   onChange={onChange}
// />
//       </div>
//     </div>
//     <div className={s.error}>
//       {error.name ? <span>{error.name}</span> : null}
//       {!form.type1 ? <span>Elegi un tipo!</span> : null}
//       {!form.type2 ? <span>Elegi un tipo! </span> : null}
//       {!form.image ? <span>Elegi una imagen!</span> : null}
//     </div>
//     <div className={s.submit}>
//       {form.name !== "" && form.type1 ? (
//         <input type="submit" disabled={false} />
//       ) : (
//         <input type="submit" disabled={true} />
//       )}
//     </div>
//   </form>
// </div>
