import { Box, Grid } from '@mui/material';
import { theme } from '../../assets/theme/theme';
import {  ProfilePicHolder } from '../../shared/style/shared.style';
import Typography from '../../shared/component/typography/typography';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../auth/services/auth.slice';
import { getProfile, selectProfile } from './services/profile.slice';
import { useEffect, useRef, useState } from 'react';
import Icon from '../../shared/component/icon/icon';
import { UploadProfile } from './services/profile.api';
import { setProfile } from './services/profile.action';
import { DEFAULT_IMG } from '../../shared/constant/shared.constant';

function Profile() {
    const user = useSelector(selectUser);
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    const [pic, setPic] = useState<string>(profile?.profileUrl || DEFAULT_IMG);
    useEffect(() => {
        !profile && dispatch(getProfile(user?.email) as keyof unknown)
        profile?.profileUrl && setPic(profile?.profileUrl)
    }, [profile]);
    const fileInputRef = useRef<any>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];
        if ( selectedFile ) {
            UploadProfile( selectedFile, user?.email ).then( r  => dispatch(setProfile(r)) );
            const reader = new FileReader();
            reader.onload = () => {
                setPic(reader?.result as any);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    return(
        <Grid container item p='24px' >
            <Grid item container className='position--relative' boxShadow={`${theme.palette.primary.dark} 0px 1px 4px;`} sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px' }}>
                <Box bgcolor={theme.palette.primary.light} height='200px' width='100%' sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px' }}/>
                <ProfilePicHolder onClick={() => handleButtonClick()}>
                    <img src={pic} height='100%' width='100%' loading='lazy' className='object-fit--cover cursor--pointer border-radius--50'/>
                </ProfilePicHolder>
                <Box hidden={true}>
                    <input type='file' accept="image/*" name='image' ref={fileInputRef} onChange={handleFileChange}/>
                </Box>
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
