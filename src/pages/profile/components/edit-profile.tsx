import { Box, Grid } from '@mui/material';
import { Formik } from 'formik';
import Input from '../../../shared/component/input/input.component';
import Button from '../../../shared/component/button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProfile } from '../services/profile.api';
import { getProfile, selectProfile } from '../services/profile.slice';

function EditProfile(props: { handleClick: any  }) {
    const user = useSelector(selectProfile)
    const dispatch = useDispatch();
    const update = (value: any) => {
        UpdateProfile(user.email, value).then(() => {
            dispatch(getProfile(user.email) as keyof unknown)
        })
    }
    return(
       <Grid container py='24px' px='14px' gap='12px'>
           <Formik
               initialValues={{ firstName: user?.firstName || '', lastName: user?.lastName || '', userName: user?.userName || '' }}
               onSubmit={(values) =>{
                   update(values);
                   props.handleClick()
               }}
           >
               {({handleSubmit, handleChange, values, touched, errors, }) => (
                   <>
                       <Input helperText={((errors.firstName || touched.firstName) && errors.firstName) as string } value={values.firstName} onChange={handleChange} name='firstName' label='First Name' />
                       <Input helperText={((errors.lastName || touched.lastName) && errors.lastName ) as string} value={values.lastName} onChange={handleChange} name='lastName' label='Last Name' />
                       {
                           !user.userName ? <Input helperText={((errors.userName || touched.userName) && errors.userName) as string} value={values.userName} onChange={handleChange} name='userName' label='UserName' /> : null
                       }
                      <Grid item container justifyContent='end' gap='6px'>
                          <Button label='Update' variant='contained' click={handleSubmit} />
                          <Button label='cancel' variant='contained' color='error' click={() => {
                              props.handleClick()
                          }} />
                      </Grid>
                   </>
               )}
           </Formik>
       </Grid>
    )
}

export default EditProfile;
