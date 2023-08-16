import { Box, Grid } from '@mui/material';
import { theme } from '../../assets/theme/theme';
import {  ProfilePicHolder } from '../../shared/style/shared.style';
import Typography from '../../shared/component/typography/typography';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../auth/services/auth.slice';
import { getProfile, selectProfile } from './services/profile.slice';
import { useEffect } from 'react';

function Profile() {
    const user = useSelector(selectUser);
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => {
        !profile && dispatch(getProfile(user?.email) as keyof unknown)
    }, []);
    return(
        <Grid container item p='24px' >
            <Grid item container className='position--relative' boxShadow={`${theme.palette.primary.dark} 0px 1px 4px;`} sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px' }}>
                <Box bgcolor={theme.palette.primary.light} height='200px' width='100%' sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px' }}/>
                <ProfilePicHolder>

                </ProfilePicHolder>
                <Grid item container mt='34px'>
                    <Box py='32px' px='24px'>
                       <Typography label={user?.name} variant='body1' />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profile;
