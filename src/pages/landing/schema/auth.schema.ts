import * as Yup from 'yup';
import {
    REQUIRED_FIELD
} from '../../../shared/constant/shared.constant';

export const CREATE_LIST_SCHEMA = Yup.object().shape( {
    name: Yup.string()
        .required( REQUIRED_FIELD ),
    feedback: Yup.string().required( REQUIRED_FIELD )
} );

