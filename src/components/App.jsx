import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import { Audio } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <h1><b>Phonebook</b></h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Audio />}
      {error && <p>There is something wrong, please reload the page</p>}
      <ContactList /> */}
        <Routes>
        <Route ></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        </Routes>
    </div>
  );
}

export default App;
