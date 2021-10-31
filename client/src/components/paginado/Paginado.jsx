import { useSelector } from "react-redux";
import s from "./paginado.module.css";
export default function Paginado({ changePage }) {
  const pages = useSelector((state) => state.pages);

  return (
    <div>
      {pages.map((element) => {
        return (
          <button
            key={element}
            onClick={() => {
              changePage(element);
            }}
            className={s.pageButton}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
}
