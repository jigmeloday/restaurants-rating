import { Grid } from '@mui/material';
import { Formik, FormikValues } from 'formik';
import Typography from '../../../shared/component/typography/typography';
import { LOGIN_SCHEMA } from '../schema/auth.schema';
import { userLogin } from '../services/auth.slice';
import Input from '../../../shared/component/input/input.component';
import Button from '../../../shared/component/button/button.component';
import { useDispatch } from 'react-redux';
import { theme } from '../../../assets/theme/theme';
import { Link } from 'react-router-dom';

function Login() {

    const dispatch = useDispatch();

    return (
        <Grid item container justifyContent='center'>
            <Formik
                initialValues={ { email: '', password: '' } }
                validationSchema={ LOGIN_SCHEMA }
                onSubmit={ ( values: FormikValues ) => dispatch( userLogin( values as any ) as any ) }>
                { ( { handleChange, touched, errors, handleBlur, handleSubmit, values } ) => (
                    <Grid item container gap='24px'>
                        <Input
                            helperText={ (touched.email &&
                                errors.email &&
                                errors.email) as string }
                            name='email' type='email' value={ values.email } label='Email' onChange={ handleChange }/>
                        <Input
                            helperText={ (touched.password &&
                                errors.password &&
                                errors.password) as string }
                            name='password' type='password' value={ values.password } label='Password'
                            onChange={ handleChange }/>
                        <Grid item container justifyContent='end'>
                            <Typography label='Forgot Password' variant='body1' className='cursor--pointer'
                                        color={ theme.palette.primary.dark }/>
                        </Grid>
                        <Button click={ handleSubmit } variant='contained' label='Login' className='width--full'/>
                        <Grid item container gap='6px' justifyContent='center' alignItems='center'>
                            <Typography label="Don't have an account?" variant='body2'/>
                            <Link to='/signup' className='link--style'>
                                <Typography
                                    label='Create account'
                                    variant='body1' className='cursor--pointer'
                                    color={ theme.palette.primary.dark }/>
                            </Link>
                        </Grid>
                    </Grid>
                ) }
            </Formik>
        </Grid>
    )
}

export default Login;
