import { useDispatch } from "react-redux"
import { registrationNewUser } from "../../redux/auth/operations";

export default function RegistrationForm() {

    const initialValues = {
        name: '',
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
                <Field></Field>
                <Field></Field>
                <Field></Field>
            </Form>
        </Formik>
    </div>
)
}