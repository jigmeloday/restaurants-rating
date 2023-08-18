import * as Yup from 'yup';
import {
    REQUIRED_FIELD
} from '../../../shared/constant/shared.constant';

export const CREATE_LIST_SCHEMA = Yup.object().shape( {
    place: Yup.string()
        .required( REQUIRED_FIELD ),
} );

