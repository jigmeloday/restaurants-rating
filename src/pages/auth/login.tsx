import { Box, Grid } from '@mui/material';
import { theme } from '../../assets/theme/theme';
import { FormContainer } from './style/auth.style';
import Typography from '../../shared/component/typography/typography';
import { Formik, FormikValues } from 'formik';
import Input from '../../shared/component/input/input.component';
import Button from '../../shared/component/button/button.component';

function Login() {
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
                         onSubmit={() => console.log('hello')}>
                         {({handleChange, handleBlur, handleSubmit}) => (
                             <Grid item container>
                                 <Input name='email' />
                                 <Input name='email' />
                                 <Button variant='contained' label='Login' className='width--full' />
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
