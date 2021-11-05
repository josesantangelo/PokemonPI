import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage } from "../../store/actions/actions";
import s from "./paginado.module.css";
export default function Paginado() {
  const pages = useSelector((state) => state.pages);
  let dispatch = useDispatch();
  const changePage = (page) => {
    dispatch(setSelectedPage(page));
  };

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
