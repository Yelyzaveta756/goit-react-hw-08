import DocumentTitle from "../../components/DocumentTitle"
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";

export default function RegistrationPage (){

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError)

    return (
        <div>
             <DocumentTitle>Registration</DocumentTitle>
             <RegistrationForm />
             {isLoading && <Loader/>}
             {error && <Error />} 
        </div>
       
    )
}