import { useState } from "react";
import { useSelector } from "react-redux";
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
    types: [],
  });
  let tipos = types.map((element) => element.name);
  const createPokemon = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const onChange = (e) => {
    const { value, name, type } = e.target;

    console.log(e.target.type);
    setForm({
      ...form,
      [name]: type === "number" ? Number(value) : value,
    });
  };
  // const onChangeSelect = (e) => {
  //   const { value, name } = e.target;

  //   setForm({
  //     ...form,

  //   })
  // };
  return (
    <div>
      <form className={s.form} onSubmit={createPokemon}>
        <div className={s.labels}>
          <label>Name: </label>
          <label>Hp: </label>
          <label>Attack: </label>
          <label>Defense: </label>
          <label>Speed: </label>
          <label>Height: </label>
          <label>Weight: </label>
        </div>
        <div>
          <input
            className={s.inputs}
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <input
            className={s.inputs}
            type="number"
            min="1"
            max="100"
            name="hp"
            value={form.hp}
            onChange={onChange}
          />
          <input
            className={s.inputs}
            type="number"
            min="1"
            max="100"
            name="attack"
            value={form.attack}
            onChange={onChange}
          />
          <input
            className={s.inputs}
            type="number"
            min="1"
            max="100"
            name="defense"
            value={form.defense}
            onChange={onChange}
          />
          <input
            className={s.inputs}
            type="number"
            min="1"
            max="100"
            name="speed"
            value={form.speed}
            onChange={onChange}
          />
          <input
            className={s.inputs}
            type="number"
            min="1"
            max="100"
            name="height"
            value={form.height}
            onChange={onChange}
          />
          <input
            className={s.inputs}
            type="number"
            min="1"
            max="100"
            name="weight"
            value={form.weight}
            onChange={onChange}
          />
          <div>
            <label htmlFor=""> Type 1</label>
            <label htmlFor="">Type 2</label>
          </div>
          <div>
            <select name="type1" id="" onChange={onChange}>
              {tipos.map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </select>
            <select name="type2" id="" onChange={onChange}>
              {tipos.map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </select>
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
