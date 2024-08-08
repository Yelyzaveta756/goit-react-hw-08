import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"
import clsx from "clsx"

export default function AuthNav(){

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };

    return (
        <div className={css.navigation}>
            <ul className={css.navigationList}>
                <li><NavLink to="/register" className={buildLinkClass}><b>Register</b></NavLink></li>
                    <li><NavLink to="/login" className={buildLinkClass}><b>Log In</b></NavLink></li>
                </ul>
        </div>
    )
}