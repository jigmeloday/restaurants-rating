import { Box, Grid } from '@mui/material';
import { HeaderContainer, ProfileHolder } from './style/header.style';
import { HEADER_NAV } from './constant/header.constant';
import Typography from '../../shared/component/typography/typography';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../assets/theme/theme';
import Search from '../search/search';
import React, { useEffect, useState } from 'react';
import MenuComponent from './components/menu.component';
import Button from '../../shared/component/button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, selectProfile } from '../../pages/profile/services/profile.slice';
import { DEFAULT_IMG } from '../../shared/constant/shared.constant';
import { selectUser } from '../../pages/auth/services/auth.slice';

function Header() {
    const [searchVal, setSearchVal] = useState<string>('');
    const active = useLocation().pathname;
    const user = useSelector(selectUser);
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    useEffect(() => {
        !profile && dispatch(getProfile(user?.email) as keyof unknown)
    }, [profile]);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSearch = (event: any) => {
        setSearchVal(event.target.value)
    }
    return (
        <Grid container>
            <HeaderContainer>
                <Grid item container direction='row' alignItems='center'>
                    <Grid item container xs={ 3 }>
                        DiaryDine
                    </Grid>
                    <Grid item container xs={ 3 }>
                        <Search name='search' handleChange={handleSearch} placeholder='search' value={searchVal} />
                    </Grid>

                    <Grid item container xs={ 6 } direction='row' alignItems='center' justifyContent='end'>
                        <Grid item container xs={ 8 }>
                            {
                                HEADER_NAV.map(({ label, path }) => (
                                    <Box mx='12px' key={label} className='cursor--pointer border-radius--8'>
                                        <Link to={path} className='link--style'>
                                            <Typography label={label.toUpperCase()} variant='body1' color={active === path ? theme.palette.primary.main: ''}  />
                                        </Link>
                                    </Box>
                                ))
                            }
                        </Grid>
                        <Grid item container xs={ 3 } justifyContent='end'>
                            <ProfileHolder onClick={handleClick as any}>
                                <img src={profile?.profileUrl || DEFAULT_IMG}
                                     className='object-fit--cover border-radius--50' width='100%' height='100%'/>
                            </ProfileHolder>
                            <MenuComponent anchorEl={anchorEl} handleClose={handleClose} open={open} />
                        </Grid>
                    </Grid>
                </Grid>
            </HeaderContainer>
        </Grid>
    )
}

export default Header;
