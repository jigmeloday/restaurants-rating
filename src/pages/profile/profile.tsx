import { Box, Grid } from '@mui/material';
import { theme } from '../../assets/theme/theme';
import {  ProfilePicHolder } from '../../shared/style/shared.style';
import Typography from '../../shared/component/typography/typography';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../auth/services/auth.slice';
import { getProfile, selectProfile } from './services/profile.slice';
import { useEffect } from 'react';
import Icon from '../../shared/component/icon/icon';
import ImageUploader from '../../shared/component/image-uploader/image-uploader';

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
                    <img src='https://images.unsplash.com/photo-1541298645675-6cc8e127934d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80' height='100%' width='100%' className='object-fit--cover border-radius--50'/>
                </ProfilePicHolder>
                <Box hidden={true}><ImageUploader /></Box>
                <Grid container item direction='row'>
                    <Grid item container mt='34px' xs={8}>
                        <Box py='32px' px='14px'>
                            <Typography label={`${profile?.firstName} ${profile?.lastName}`} variant='body1' fontWeight='700' fontSize={24} />
                            <Typography label={profile?.email} variant='body1' />
                            <Typography label={profile?.userName} variant='body1' />
                        </Box>
                    </Grid>
                    <Grid item container justifyContent='end' xs={4} px='8px' pt='20px'>
                        <Icon iconName='more_vert' className='cursor--pointer'/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profile;
