import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import back from "../../utils/img/back.png";
import s from "./form.module.css";

const Form = () => {
  const types = useSelector((state) => state.types);
  const [form, setForm] = useState({
    name: "",
    hp: 1,
    attack: 1,
    defense: 1,
    speed: 1,
    height: 1,
    weight: 1,
    type1: null,
    type2: null,
    img: null,
  });

  const [error, setError] = useState({
    name: " ",
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
  const createPokemon = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/pokemons", form)
      .then(alert("exito!"));
  };
  const onChange = (e) => {
    const { value, name, type } = e.target;

    console.log(e.target.type);
    setForm({
      ...form,
      [name]: type === "number" ? Number(value) : value,
    });
  };
  //No puedo manejar el error del back con un else
  const checkName = async (value) => {
    setError({
      ...error,
      name: `OK`,
    });

    // loading = true;
    let poke = await axios.get(`http://localhost:3001/pokemons?name=${value}`);
    let name = poke.data.name;
    console.log("name", name);

    // loading = false;

    if (name) {
      setError({
        ...error,
        name: `${poke.data.name} ya existe, proba otro!`,
      });
      return setForm({
        ...form,
        name: "",
      });
    }
    if (!form.name) {
      setError({
        ...error,
        name: `Elegi un nombre!`,
      });
    }
  };

  return (
    <div className={s.container}>
      <div className={s.return}>
        <Link to="/home">
          <img src={back} alt="" />
        </Link>
      </div>
      <form className={s.card} onSubmit={createPokemon}>
        <div className={s.form}>
          <div className={s.label}>
            <label>Name: </label>
            <label> Type 1</label>
            <label>Type 2</label>
            <label>Url Image</label>
            <label>Hp: </label>
            <label>Attack: </label>
            <label>Defense: </label>
            <label>Speed: </label>
            <label>Height: </label>
            <label>Weight: </label>
          </div>
          <div className={s.inputs}>
            <input
              className={s.input}
              type="text"
              name="name"
              value={form.name}
              autoFocus
              autoComplete="off"
              onChange={onChange}
              onBlur={() => checkName(form.name)}
            />
            <select type="number" name="type1" id="" onChange={onChange}>
              <option value="" selected disabled></option>
              {types.map((element) => {
                return <option value={element.id_api}>{element.name}</option>;
              })}
            </select>
            <select type="number" name="type2" id="" onChange={onChange}>
              <option value="" selected disabled></option>
              {types.map((element) => {
                return <option value={element.id_api}>{element.name}</option>;
              })}
            </select>
            <input
              type="url"
              name="img"
              onChange={onChange}
              autoComplete="off"
              value={form.img}
            />
            <input
              className={s.input}
              type="number"
              min="1"
              max="100"
              name="hp"
              value={form.hp}
              onChange={onChange}
            />
            <input
              className={s.input}
              type="number"
              min="1"
              max="100"
              name="attack"
              value={form.attack}
              onChange={onChange}
            />
            <input
              className={s.input}
              type="number"
              min="1"
              max="100"
              name="defense"
              value={form.defense}
              onChange={onChange}
            />
            <input
              className={s.input}
              type="number"
              min="1"
              max="100"
              name="speed"
              value={form.speed}
              onChange={onChange}
            />
            <input
              className={s.input}
              type="number"
              min="1"
              max="100"
              name="height"
              value={form.height}
              onChange={onChange}
            />
            <input
              className={s.input}
              type="number"
              min="1"
              max="100"
              name="weight"
              value={form.weight}
              onChange={onChange}
            />
          </div>
        </div>
        <div className={s.error}>
          {error.name ? <span>{error.name}</span> : null}
          {!form.type1 ? <span>Elegi un tipo!</span> : null}
          {!form.type2 ? <span>Elegi un tipo! </span> : null}
          {!form.image ? <span>Elegi una imagen!</span> : null}
        </div>
        <div className={s.submit}>
          {form.name !== "" && form.type1 && form.type2 && form.img ? (
            <input type="submit" disabled={false} />
          ) : (
            <input type="submit" disabled={true} />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
