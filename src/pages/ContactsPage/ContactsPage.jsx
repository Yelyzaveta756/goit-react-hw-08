import DocumentTitle from "../../components/DocumentTitle"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage(){

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div>
             <DocumentTitle>Your contacts</DocumentTitle>
             <ContactForm />
              <SearchBox />
             <div>{isLoading && 'Request in progress...'}</div>
             <ContactList />
        </div>
    )
}