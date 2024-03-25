import React from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

function SignUpForm(props) {
    const handleSubmitToFormik = (values, actions) => {
        console.log(values);
        actions.resetForm();
    }

    return (
        <Formik 
            initialValues={initialState} 
            onSubmit={handleSubmitToFormik}
            validationSchema={SIGN_UP_SCHEMA}
        >
            {(formikProps) => {
                return (
                    <Form style={{display: 'flex', flexDirection: 'column'}}>
                        <Field name='firstName' placeholder='Type your firstName' />
                        <ErrorMessage name='firstName' component='p' />
                        <Field name='lastName' placeholder='Type your lastName' />
                        <ErrorMessage name='lastName' component='p' />
                        <Field name='email' placeholder='Type your email' />
                        <ErrorMessage name='email' component='p' />
                        <Field name='password' placeholder='Type your password' />
                        <ErrorMessage name='password' component='p' />
                        <button type='submit'>Send</button>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default SignUpForm;

/*

Валідація програмного забезпечення

Коли ми перевіряємо, що розроблений продукт - те, що хотів наш клієнт.




Верифікація програмного забезпечення

Коли ми перевіряємо, а як саме реалізовані вимоги клієнта.

*/


/*


Створити за аналогією компоненту входу.
Використати Formik + yup

*/
