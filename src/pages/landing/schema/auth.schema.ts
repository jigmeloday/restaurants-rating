import * as Yup from 'yup';
import {
    EMAIL_FIELD,
    PASSWORD_LENGTH,
    PASSWORD_REQUIRED_LOWERCASE,
    PASSWORD_REQUIRED_NUMBER,
    PASSWORD_REQUIRED_UPPERCASE, REQUIRED_FIELD
} from '../../../shared/constant/shared.constant';

export const CREATE_LIST_SCHEMA = Yup.object().shape( {
    name: Yup.string()
        .required( REQUIRED_FIELD ),
    feedback: Yup.string().required( REQUIRED_FIELD )
} );

