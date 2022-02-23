import React from 'react';
import { Field, Formik } from 'formik';
import { FormWrapper } from './styles';
import { studentSchema } from './validation';

export const StudentRegistration = () => {
    () => ({ color: '' });

    return (
        <FormWrapper>
            <Formik
                initialValues = {
                    {
                        firstName:  '',
                        surName:    '',
                        age:        '',
                        email:      '',
                        sex:        '',
                        speciality: '',
                    }
                }
                validationSchema = { studentSchema }
                onSubmit = { (value) => {
                    console.log(value);
                } }>
                {({ errors, touched, handleSubmit }) => (
                    <form onSubmit = { handleSubmit } >
                        <label className = 'for-field'>
                            <Field
                                className = 'field'
                                name = 'firstName'
                                placeholder = 'first name'
                                type = 'text'>
                            </Field>
                            {errors.firstName && touched.firstName ? <div className = 'error-field'>{errors.firstName}</div> : null}
                        </label>
                        <label className = 'for-field'>
                            <Field
                                className = 'field'
                                name = 'surName'
                                placeholder = 'sur name'
                                type = 'text'>
                            </Field>
                            {errors.surName && touched.surName ? <div className = 'error-field'>{errors.surName}</div> : null}
                        </label>
                        <p>
                            <label className = 'for-field'>
                                <Field
                                    className = 'field'
                                    name = 'age'
                                    placeholder = 'age'
                                    type = 'number'>
                                </Field>
                                {errors.age && touched.age ? <div className = 'error-field'>{errors.age}</div> : null}
                            </label>
                            <label className = 'for-field'>
                                <Field
                                    className = 'field'
                                    name = 'email'
                                    placeholder = 'email'
                                    type = 'email'>
                                </Field>
                                {errors.email && touched.email ? <div className = 'error-field'>{errors.email}</div> : null}
                            </label>
                        </p>
                        <p>
                            <label className = 'for-handler'>
                                <Field
                                    className = 'handler'
                                    name = 'sex'
                                    type = 'radio'
                                    value = 'male'>
                                </Field>
                                male
                                <Field
                                    className = 'handler'
                                    name = 'sex'
                                    type = 'radio'
                                    value = 'female'>
                                </Field>
                                female
                                {errors.sex && touched.sex ? <div className = 'error-handler'>{errors.sex}</div> : null}
                            </label>
                        </p>
                        <p>
                            <label className = 'for-handler'>
                                <Field
                                    as = 'select'
                                    className = 'handler'
                                    name = 'speciality'>
                                    <option value = ''>Select speciality</option>
                                    <option value = 'designer'>designer</option>
                                    <option value = 'developer'>developer</option>
                                    <option value = 'writer'>writer</option>
                                </Field>
                                {errors.speciality && touched.speciality ? <div className = 'error-handler'>{errors.speciality}</div> : null}
                            </label>
                        </p>
                        <button
                            className = 'submit'
                            type = 'submit'>Submit
                        </button>
                    </form>
                )}
            </Formik>
        </FormWrapper>
    );
};
