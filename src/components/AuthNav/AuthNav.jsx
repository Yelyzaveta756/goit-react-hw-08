import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"
import clsx from "clsx"

export default function AuthNav(){

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };

    return (
        <nav className={css.navigation}>
            <ul className={css.navigationList}>
                <li><NavLink to="/register" className={buildLinkClass}>Register</NavLink></li>
                    <li><NavLink to="/login" className={buildLinkClass}>Log In</NavLink></li>
                </ul>
        </nav>
    )
}