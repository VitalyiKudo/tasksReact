import * as yup from 'yup';

export const studentSchema = yup.object().shape({
    firstName: yup.string()
        .required('field requied'),
    surName: yup.string()
        .required('field requied'),
    age: yup.number()
        .min(6, 'minimum 6')
        .max(60, 'maximum 60'),
    email: yup.string()
        .required()
        .email(),
    sex: yup.string()
        .required('field requied'),
    speciality: yup.string()
        .required('field requied'),
});
