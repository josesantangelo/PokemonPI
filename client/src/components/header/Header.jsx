import Paginado from "../paginado/Paginado.jsx";
import Filters from "../filters/Filters.jsx";
import Navbar from "../navbar/Navbar.jsx";
export default function Header() {
  return (
    <>
      <Navbar />
      <a href="#">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt=""
        />
      </a>
      <Filters />
      <Paginado />
    </>
  );
}
