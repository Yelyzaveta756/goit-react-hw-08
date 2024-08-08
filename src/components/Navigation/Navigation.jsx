import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"
import clsx from "clsx"

export default function Navigation(){

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };

      const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.navigation}>
            <ul className={css.navigationList}>
                <li><NavLink to="/" className={buildLinkClass}><b>Home</b></NavLink></li>
                {isLoggedIn && 
                    <li><NavLink to="/contacts" className={buildLinkClass}><b>Contacts</b></NavLink></li>
                       } 
                </ul>
        </nav>
    )
}