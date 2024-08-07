import { useDispatch } from "react-redux"
import { Formik, Form, Field } from "formik";

export default function LoginForm(){
    const initialValues = {
        email: '',
        password: '',
      };

      const dispatch = useDispatch()

    const handleSubmit = (values, action) => {
        dispatch(registrationNewUser(values))
        console.log(values)
        action.resetForm()
    }

return (
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field type="text">Email</Field>
                <Field type="text">Password</Field>
            </Form>
        </Formik>
    </div>
)
}