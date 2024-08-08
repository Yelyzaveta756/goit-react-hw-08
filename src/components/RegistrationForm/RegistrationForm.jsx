import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function RegistrationForm() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
      };

      const dispatch = useDispatch()

    const handleSubmit = (values) => {
        console.log("Submitting values:", values);
        dispatch(register(values))
        .then(response => {
            console.log("Registration successful:", response);
        })
        .catch(error => {
            console.error("Registration failed:", error);
        })
    }

return (
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor="name" >Name</label>
                <Field type="text" name="name" autoComplete="off" required></Field>
                <ErrorMessage name='name' component='span' />
                <label htmlFor="email" >Email</label>
                <Field type="email" name="email" autoComplete="off" required></Field>
                <ErrorMessage name='email' component='span' />
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" autoComplete="off" required></Field>
                <ErrorMessage name='password' component='span' />
                <button type="submit">Register</button>
            </Form>
        </Formik>
    </div>
)
}