import { useDispatch } from "react-redux"
import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";

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
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor="email" >Email</label>
                <Field type="email" name="email" autoComplete="off" required></Field>
                <label htmlFor="password" >Email</label>
                <Field type="password" name="password" autoComplete="off" required></Field>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    </div>
)
}