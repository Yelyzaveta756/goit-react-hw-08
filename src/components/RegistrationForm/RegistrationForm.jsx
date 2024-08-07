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

    const handleSubmit = (values, action) => {
        dispatch(register(values))
        console.log(values)
        action.resetForm()
    }

return (
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field type="text" name="name"></Field>
                <Field type="email" name="email"></Field>
                <Field type="password" name="password"></Field>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    </div>
)
}