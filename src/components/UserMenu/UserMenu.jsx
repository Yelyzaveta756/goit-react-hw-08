import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from './UserMenu.module.css'

export default function UserMenu (){

  const dispatch = useDispatch();
  const user  = useSelector(selectUser);
  console.log(user)

  return (
    <div className={css.menuContainer}>
      <p>Welcome, <b>{user.name}</b></p>
      <button type="button" className={css.logoutBtn}onClick={() => dispatch(logout())}>
        <b>Logout</b>
      </button>
    </div>
  );
}