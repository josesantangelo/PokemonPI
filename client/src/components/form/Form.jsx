import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./form.module.css";

export default function Form() {
  //No los trae ...
  // const pokemonss = useSelector((state) => state.pokemons);
  // console.log("pokemons de form: " + pokemonss);
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [types, setTypes] = useState([]);
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
  });
  let pokemons = ["pikachu", "bulbasaur", "charmander"];
  let tipos = ["fire", "water", "bug"];

  const validatePokemon = (value) => {
    if (pokemons.includes(value.toLowerCase())) {
      setError({
        ...error,
        name: `${value} ya existe! Probaste Super${value}?`,
      });
      console.log(error.name);
    } else {
      setError({ ...error, name: "" });
    }
    setName(value);
  };

  const validatestats = (value, set, stat) => {
    if (isNaN(value) || value < 0 || value > 100) {
      setError({
        ...error,
        [stat]: "Tiene que ser un numero entre 0 y 100!",
      });
    } else {
      setError({ ...error, [stat]: "" });
    }
    set(value);
  };

  const getSelectedTypes = (e) => {
    console.log("click");
  };
  return (
    <form action="#" className={s.form}>
      <input
        type="text"
        placeholder="nombre..."
        onChange={(e) => validatePokemon(e.target.value)}
        className={error.name && s.danger}
      />
      {error.name ? <span>{error.name}</span> : null}
      <input
        type="text"
        placeholder="hp..."
        onChange={(e) => validatestats(e.target.value, setHp, "hp")}
        className={error.hp && s.danger}
      />
      {error.hp ? <span>HP {error.hp}</span> : null}
      <input
        type="text"
        placeholder="attack..."
        onChange={(e) => validatestats(e.target.value, setAttack, "attack")}
        className={error.attack && s.danger}
      />
      {error.attack ? <span>Attack {error.attack}</span> : null}

      <select name="types" id="types" onClick={(e) => getSelectedTypes()}>
        {tipos.map((element) => {
          return (
            <option key={element} value={element}>
              {element}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        placeholder="defense..."
        onChange={(e) => validatestats(e.target.value, setAttack, "defense")}
        className={error.defense && s.danger}
      />
      {error.defense ? <span>Defense {error.defense}</span> : null}
      <input
        type="text"
        placeholder="speed..."
        onChange={(e) => validatestats(e.target.value, setAttack, "speed")}
        className={error.speed && s.danger}
      />
      {error.speed ? <span>Speed {error.speed}</span> : null}
      <input type="text" placeholder="height..." />
      <input type="text" placeholder="weight..." />
      <input type="submit" />
    </form>
  );
}

// name, hp, attack, types, defense, speed, height, weight;
