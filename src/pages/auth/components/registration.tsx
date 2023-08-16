// import { Box, Grid } from '@mui/material';
// import { theme } from '../../assets/theme/theme';
// import { FormContainer } from './style/auth.style';
// import Typography from '../../shared/component/typography/typography';
// import { Formik, FormikValues } from 'formik';
// import Input from '../../shared/component/input/input.component';
// import Button from '../../shared/component/button/button.component';
// import { useDispatch } from 'react-redux';
// import { userLogin } from './services/auth.slice';
// import { LOGIN_SCHEMA } from './schema/auth.schema';
//
// function Login() {
//     const dispatch = useDispatch();
//     return(
//         <Grid container item bgcolor={theme.palette.primary.main} height='100vh'>
//             <Grid item container justifyContent='center' alignItems='center' >
//                 <FormContainer >
//                     <Grid item container justifyContent='center'>
//                         <Box my='18px'>
//                             <Typography label='Login' variant='body1' />
//                         </Box>
//                         <Formik
//                             initialValues={{ email: '', password: ''}}
//                             validationSchema={LOGIN_SCHEMA}
//                             onSubmit={(values: FormikValues) => dispatch(userLogin(values as any) as any)}>
//                             {({handleChange, touched, errors, handleBlur, handleSubmit, values}) => (
//                                 <Grid item container gap='24px'>
//                                     <Input
//                                         helperText={(touched.email &&
//                                             errors.email &&
//                                             errors.email) as string }
//                                         name='email' type='email' value={values.email} label='Email' onChange={handleChange} />
//                                     <Input
//                                         helperText={(touched.password &&
//                                             errors.password &&
//                                             errors.password) as string }
//                                         name='password' type='password' value={values.password} label='Password' onChange={handleChange} />
//                                     <Button click={handleSubmit} variant='contained' label='Login' className='width--full' />
//                                 </Grid>
//                             )}
//                         </Formik>
//                     </Grid>
//                 </FormContainer>
//             </Grid>
//         </Grid>
//     )
// }
//
// export default Login

function Registration() {
    return(
        <>registration</>
    )
}

export default Registration
