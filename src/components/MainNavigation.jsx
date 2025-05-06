import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

// Link/NavLink elements return an "a" element in HTML

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=''
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end // to tell if the path ends with "/" to be active
              // style={({ isActive }) => ({textAlign: isActive ? "center" : "left"})}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='products'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
