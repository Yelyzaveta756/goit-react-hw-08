import { useDispatch } from "react-redux"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import css from './LoginForm.module.css'

export default function LoginForm(){
    const initialValues = {
        email: '',
        password: '',
      };

      const dispatch = useDispatch()

    const handleSubmit = (values) => {
        dispatch(login(values))
        console.log(values)
    }

return (
    <div className={css.loginContainer}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label htmlFor="email" className={css.labelfirst}>Email</label>
                <Field type="email" name="email" autoComplete="off" className={css.input} required></Field>
                <ErrorMessage name='email' component='span' className={css.error}/>
                <label htmlFor="password" className={css.labelfirst}>Password</label>
                <Field type="password" name="password" autoComplete="off" className={css.input} required></Field>
                <ErrorMessage name='password' component='span' className={css.error}/>
                <button type="submit" className={css.addBtn}>Login</button>
            </Form>
        </Formik>
    </div>
)
}