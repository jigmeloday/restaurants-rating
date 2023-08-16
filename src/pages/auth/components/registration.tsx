import { Formik, FormikValues } from "formik"
import { SIGN_UP_SCHEMA } from '../schema/auth.schema';
import { userLogin } from '../services/auth.slice';
import { Grid } from '@mui/material';
import Input from '../../../shared/component/input/input.component';
import Button from '../../../shared/component/button/button.component';
import { useDispatch } from 'react-redux';
import Typography from '../../../shared/component/typography/typography';
import { Link } from 'react-router-dom';
import { theme } from '../../../assets/theme/theme';

function Registration() {
    const dispatch = useDispatch();
    return(
        <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema={SIGN_UP_SCHEMA}
            onSubmit={(values: FormikValues) => dispatch(userLogin(values as any) as any)}>
            {({handleChange, touched, errors, handleBlur, handleSubmit, values}) => (
                <Grid item container gap='24px'>
                    <Input
                        onBlur={handleBlur}
                        helperText={(touched.email &&
                            errors.email &&
                            errors.email) as string }
                        name='email' type='email' value={values.email} label='Email' onChange={handleChange} />
                    <Input
                        onBlur={handleBlur}
                        helperText={(touched.password &&
                            errors.password &&
                            errors.password) as string }
                        name='password' type='password' value={values.password} label='Password' onChange={handleChange} />
                    <Button click={handleSubmit} variant='contained' label='Sign  Up' className='width--full' />
                    <Grid item container gap='6px' justifyContent='center' alignItems='center'>
                        <Typography label="Already have an account" variant='body2'/>
                        <Link to='/' className='link--style'>
                            <Typography
                                label='Login'
                                variant='body1' className='cursor--pointer'
                                color={ theme.palette.primary.dark }/>
                        </Link>
                    </Grid>
                </Grid>
            )}
        </Formik>
    )
}

export default Registration
