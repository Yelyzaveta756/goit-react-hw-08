import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";

export default function RegistrationForm() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
      };

      const dispatch = useDispatch()

    const handleSubmit = (values) => {
        dispatch(register(values))
        console.log(values)
    }

return (
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor="name" >Name</label>
                <Field type="text" name="name" autoComplete="off" required></Field>
                <label htmlFor="email" >Email</label>
                <Field type="email" name="email" autoComplete="off" required></Field>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" autoComplete="off" required></Field>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    </div>
)
}