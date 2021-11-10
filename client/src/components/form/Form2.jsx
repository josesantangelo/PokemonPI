// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import s from "./form.module.css";
// // import { validatePokemon } from "../../utils/functions.js";
// export default function Form() {
//   const types = useSelector((state) => state.types);
//   const pokemons = useSelector((state) => state.pokemons);
//   console.log("types del form", types);

//   const [form, setForm] = useState({
//     name: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//   });
//   const [error, setError] = useState({
//     name: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//   });

//   const { hp, name, attack, defense, speed } = form;
//   let pokeNames = pokemons.map((element) => element.name);

//   let tipos = types.map((element) => element.name);

//   const validatePokemon = (value) => {
//     if (pokeNames.includes(value.toLowerCase())) {
//       setError({
//         ...error,
//         name: `${value} ya existe! Probaste Super${value}?`,
//       });
//       console.log(error.name);
//     } else {
//       setError({ ...error, name: "" });
//     }
//     setForm(...form, name);
//   };

//   const validatestats = (value, set, stat) => {
//     if (isNaN(value) || value < 0 || value > 100) {
//       setError({
//         ...error,
//         [stat]: "Tiene que ser un numero entre 0 y 100!",
//       });
//     } else {
//       setError({ ...error, [stat]: "" });
//     }
//     set(value);
//   };

//   // const onSubmit = (e) => {
//   //   e.preventdefault();
//   //   console.log("submit");
//   //   alert("submit!");
//   // };

//   const getSelectedTypes = (e) => {
//     console.log("click");
//   };
//   return (
//     <form
//       action="#"
//       onSubmit={(e) => {
//         e.preventDefault();
//         alert({});
//       }}
//       className={s.form}
//     >
//       <div className={s.labels}>
//         <label htmlFor="Name">Name</label>
//         <label htmlFor="HP">HP</label>
//         <label htmlFor="Attack">ATTACK</label>
//         <label htmlFor="Defense">DEFENSE</label>
//         <label htmlFor="Speed">SPEED</label>
//         <label htmlFor="Height">HEIGHT</label>
//         <label htmlFor="Weight">WEIGHT</label>
//       </div>
//       <div className={s.inputs}>
//         <input
//           type="text"
//           placeholder="nombre..."
//           onChange={(e) => validatePokemon(e.target.value)}
//           className={error.name && s.danger}
//         />
//         {error.name ? <span>{error.name}</span> : null}

//         <input
//           type="number"
//           min="1"
//           max="100"
//           placeholder="hp..."
//           onChange={(e) => validatestats(e.target.value, setHp, "hp")}
//           className={error.hp && s.danger}
//         />
//         {error.hp ? <span>HP {error.hp}</span> : null}
//         <input
//           type="number"
//           min="1"
//           max="100"
//           placeholder="attack..."
//           onChange={(e) => validatestats(e.target.value, setAttack, "attack")}
//           className={error.attack && s.danger}
//         />
//         {error.attack ? <span>Attack {error.attack}</span> : null}

//         <select name="types" id="types" onClick={(e) => getSelectedTypes()}>
//           {tipos.map((element) => {
//             return (
//               <option key={element} value={element}>
//                 {element}
//               </option>
//             );
//           })}
//         </select>

//         <input
//           type="number"
//           min="1"
//           max="100"
//           placeholder="defense..."
//           onChange={(e) => validatestats(e.target.value, setAttack, "defense")}
//           className={error.defense && s.danger}
//         />
//         {error.defense ? <span>Defense {error.defense}</span> : null}
//         <input
//           type="number"
//           min="1"
//           max="100"
//           placeholder="speed..."
//           onChange={(e) => validatestats(e.target.value, setAttack, "speed")}
//           className={error.speed && s.danger}
//         />
//         {error.speed ? <span>Speed {error.speed}</span> : null}
//         <input type="text" placeholder="height..." />
//         <input type="text" placeholder="weight..." />
//         <input type="submit" />
//       </div>
//     </form>
//   );
// }

// // name, hp, attack, types, defense, speed, height, weight;
