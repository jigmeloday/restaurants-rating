import { Box, Grid } from '@mui/material';
import { theme } from '../../assets/theme/theme';
import { FormContainer } from './style/auth.style';
import Typography from '../../shared/component/typography/typography';
import { Formik, FormikValues } from 'formik';
import Input from '../../shared/component/input/input.component';
import Button from '../../shared/component/button/button.component';
import { useDispatch } from 'react-redux';
import { userLogin } from './services/auth.slice';

function Login() {
    const dispatch = useDispatch();
    return(
      <Grid container item bgcolor={theme.palette.primary.main} height='100vh'>
          <Grid item container justifyContent='center' alignItems='center' >
             <FormContainer >
                 <Grid item container justifyContent='center'>
                     <Box my='18px'>
                        <Typography label='Login' variant='body1' />
                     </Box>
                     <Formik
                         initialValues={{ email: '', password: ''}}
                         onSubmit={(values: FormikValues) => dispatch(userLogin(values as any) as any)}>
                         {({handleChange, handleBlur, handleSubmit, values}) => (
                             <Grid item container gap='24px'>
                                 <Input name='email' value={values.email} label='Email' onChange={handleChange} />
                                 <Input name='password' value={values.password} label='Password' onChange={handleChange} />
                                 <Button click={handleSubmit} variant='contained' label='Login' className='width--full' />
                             </Grid>
                         )}
                     </Formik>
                 </Grid>
             </FormContainer>
          </Grid>
      </Grid>
    )
}

export default Login
