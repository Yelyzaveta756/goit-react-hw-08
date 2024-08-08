import DocumentTitle from "../../components/DocumentTitle"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { Loader } from "../../components/Loader/Loader";
import Error from "../../components/ErrorMessage/ErrorMessage";

export default function ContactsPage(){

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contacts = useSelector(selectContacts)
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div>
             <DocumentTitle>Your contacts</DocumentTitle>
             <ContactForm />
              <SearchBox />
              {isLoading && <Loader/>}
              {error && <Error />}
              {contacts.length > 0 && <ContactList />}
        </div>
    )
}