import Button from '../../shared/component/button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../auth/services/auth.slice';
import { getCafeList, selectCafe } from './services/landing.slice';
import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import CafeList from '../../shared/component/cafe-list/cafe-list';

function Landing() {
    const dispatch = useDispatch();
    const cafe = useSelector(selectCafe);
    useEffect(() => {
        !cafe.length && dispatch(getCafeList() as any)
    }, []);

    return(
        <Grid container item padding='34px' >
            <Grid item container direction='row' gap='22px'>
                {
                    cafe.map((item:{ id: string, name: string }, index: number) => (
                        <Box>
                            <CafeList item={item} key={index} />
                        </Box>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default Landing;
