import { Box, Grid } from '@mui/material';
import { theme } from '../../assets/theme/theme';
import { FormContainer } from './style/auth.style';
import Typography from '../../shared/component/typography/typography';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Login from './components/login';
import Registration from './components/registration';

function Auth() {
    const AUTH_ROUTE = [
        {
            element: <Login />,
            path: '/'
        },
        {
            element: <Registration />,
            path: '/signup'
        }
    ]
    return(
        <Grid container item bgcolor={theme.palette.primary.main} height='100vh'>
            <Grid item container justifyContent='center' alignItems='center' >
                <FormContainer >
                    <Grid item container justifyContent='center'>
                        <Box my='18px'>
                            <Typography label='LOGO' variant='body1' />
                        </Box>
                        <Grid item container>
                            <Suspense fallback={ null }>
                                <Routes>
                                    {
                                        AUTH_ROUTE.map(({ element, path}) =>
                                            (  <Route path={path} element={element} key={path} />))
                                    }
                                </Routes>
                            </Suspense>
                        </Grid>
                    </Grid>
                </FormContainer>
            </Grid>
        </Grid>
    )
}

export default Auth
