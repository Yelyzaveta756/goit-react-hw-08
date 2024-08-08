import { Link } from "react-router-dom"

export default function NotFoundPage (){
    return(
            <h3>
            Oops...something is going wrong! Please follow this link
            <Link to="/"> home page 💁‍♀️</Link>
            </h3>
    )
}