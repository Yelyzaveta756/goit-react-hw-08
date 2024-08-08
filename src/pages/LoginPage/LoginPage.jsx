import DocumentTitle from "../../components/DocumentTitle"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";

export default function LoginPage(){

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    return (
        <div>
            <DocumentTitle>Login</DocumentTitle>
            <LoginForm />
            {isLoading && <Loader/>}
            {error && <Error />}   
        </div>
    )
}