import { NavLink, Link } from "react-router-dom";

// Import Custom Hooks
import useAxios from "../../../CustomHooks/useAxios/useAxios";
import usePreventRouterLinks from "../../../CustomHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Navbar List Sass File
import "./List.scss";

// Navbar List Component
const NavbarList = ({ setNavbarOpen }) => {
  // Custom Hooks
  const { preventRouterLinks } = usePreventRouterLinks();

  // Fetch data
  const {
    data: { links = [], button = {} },
  } = useAxios(`${process.env.PUBLIC_URL}/apis/navbar.json`, []);

  const habdleCLick = (e, link) => {
    preventRouterLinks(e, link);
    setNavbarOpen(false);
  };

  const listItems = links.map((link) => {
    return (
      <li key={link.id} className="navbar-item">
        <NavLink
          exact
          to={`${process.env.PUBLIC_URL}${link.link}`}
          className="navbar-link"
          onClick={(e) =>
            habdleCLick(e, `${process.env.PUBLIC_URL}${link.link}`)
          }
        >
          {link.text}
        </NavLink>
      </li>
    );
  });

  return (
    <ul className="navbar-list">
      {listItems}
      <NavbarBtn button={button} habdleCLick={habdleCLick} />
    </ul>
  );
};

// Navbar Btn Component
const NavbarBtn = ({ button: { text }, habdleCLick }) => {
  return (
    <li className="navbar-item navbar-btn">
      <Link
        to={`${process.env.PUBLIC_URL}/`}
        onClick={(e) => habdleCLick(e, process.env.PUBLIC_URL + "/")}
        className="navbar-link"
      >
        <span className="navbar-btn-text">{text}</span>
      </Link>
    </li>
  );
};

export default NavbarList;
