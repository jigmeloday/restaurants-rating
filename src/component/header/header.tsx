import { Box, Grid } from '@mui/material';
import { HeaderContainer, ProfileHolder } from './style/header.style';
import { HEADER_NAV } from './constant/header.constant';
import Typography from '../../shared/component/typography/typography';
import { useLocation } from 'react-router-dom';
import { theme } from '../../assets/theme/theme';

function Header() {
    const active = useLocation().pathname;
    return (
        <Grid container>
            <HeaderContainer>
                <Grid item container direction='row' alignItems='center'>
                    <Grid item container xs={ 3 }>
                        Logo
                    </Grid>
                    <Grid item container xs={ 3 }>
                        Logo
                    </Grid>

                    <Grid item container xs={ 6 } direction='row' alignItems='center' justifyContent='end'>
                        <Grid item container xs={ 6 }>
                            {
                                HEADER_NAV.map(({ label, path }) => (
                                    <Box mx='12px' key={label} className='cursor--pointer border-radius--8'>
                                        <Typography label={label.toUpperCase()} variant='body1' color={active === path ? theme.palette.primary.main: ''}  />
                                    </Box>
                                ))
                            }
                        </Grid>
                        <Grid item container xs={ 3 } justifyContent='end'>
                            <ProfileHolder>
                                <img src='https://images.unsplash.com/photo-1541298645675-6cc8e127934d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80' className='object-fit--cover border-radius--50' width='100%' height='100%'/>
                            </ProfileHolder>
                        </Grid>
                    </Grid>
                </Grid>
            </HeaderContainer>
        </Grid>
    )
}

export default Header;
