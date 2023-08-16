import * as Yup from 'yup';
import {
    EMAIL_FIELD,
    PASSWORD_LENGTH,
    PASSWORD_REQUIRED_LOWERCASE,
    PASSWORD_REQUIRED_NUMBER,
    PASSWORD_REQUIRED_UPPERCASE, REQUIRED_FIELD
} from '../../../shared/constant/shared.constant';

export const LOGIN_SCHEMA = Yup.object().shape( {
    email: Yup.string()
        .required( REQUIRED_FIELD ).email( EMAIL_FIELD ),
    password: Yup.string().required( REQUIRED_FIELD ).min( 6, PASSWORD_LENGTH )
        .matches( /[0-9]/, PASSWORD_REQUIRED_NUMBER )
        .matches( /[a-z]/, PASSWORD_REQUIRED_LOWERCASE )
        .matches( /[A-Z]/, PASSWORD_REQUIRED_UPPERCASE ),
} );

export const SIGN_UP_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .required( REQUIRED_FIELD ).email( EMAIL_FIELD ),
    password: Yup.string().required( REQUIRED_FIELD ).min( 6, PASSWORD_LENGTH )
        .matches( /[0-9]/, PASSWORD_REQUIRED_NUMBER )
        .matches( /[a-z]/, PASSWORD_REQUIRED_LOWERCASE )
        .matches( /[A-Z]/, PASSWORD_REQUIRED_UPPERCASE ),
})
