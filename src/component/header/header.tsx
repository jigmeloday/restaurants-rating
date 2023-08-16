import { Box, Grid } from '@mui/material';
import { HeaderContainer, ProfileHolder } from './style/header.style';
import { HEADER_NAV } from './constant/header.constant';
import Typography from '../../shared/component/typography/typography';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../assets/theme/theme';
import Search from '../search/search';
import React, { useState } from 'react';
import MenuComponent from './components/menu.component';

function Header() {
    const [searchVal, setSearchVal] = useState<string>('');
    const active = useLocation().pathname;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
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
                                        <Link to={path}>
                                            <Typography label={label.toUpperCase()} variant='body1' color={active === path ? theme.palette.primary.main: ''}  />
                                        </Link>
                                    </Box>
                                ))
                            }
                        </Grid>
                        <Grid item container xs={ 3 } justifyContent='end'>
                            <ProfileHolder onClick={handleClick as any}>
                                <img src='https://images.unsplash.com/photo-1541298645675-6cc8e127934d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80'
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
