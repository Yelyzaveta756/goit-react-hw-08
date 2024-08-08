import { Routes, Route } from 'react-router-dom';
import { Suspense,lazy } from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute'
import { Loader } from './Loader/Loader';
import './App.css';



const HomePage = lazy(() => import ("../pages/HomePage/HomePage"))
const RegistrationPage = lazy(() => import ("../pages/RegistrationPage/RegistrationPage"))
const NotFoundPage = lazy (() => import ("../pages/NotFoundPage/NotFoundPage"))
const ContactsPage = lazy (() => import ("../pages/ContactsPage/ContactsPage"))
const LoginPage = lazy (() => import ("../pages/LoginPage/LoginPage"))

function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (
       <Suspense fallback={<Loader />}>
       <Layout>
       <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}></Route>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}></Route>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
       </Layout>
        </Suspense>
  )
}

export default App;
