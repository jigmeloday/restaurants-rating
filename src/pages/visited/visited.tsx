import { Box, Grid } from '@mui/material';
import CafeList from '../../shared/component/cafe-list/cafe-list';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisitedCafe, visitedList } from '../landing/services/landing.slice';
import { useEffect } from 'react';

function Visited () {
    const dispatch = useDispatch();
    const cafe = useSelector(selectVisitedCafe);
    useEffect(() => {
        !cafe.length && dispatch(visitedList() as any)
    }, []);

    return(
        <Grid container item padding='34px' >
            <Grid item container direction='row' gap='22px' my='24px'>
                {
                    cafe?.map((item:{ id: string, name: string }) => (
                        <Box key={item.id}>
                            <CafeList item={item} />
                        </Box>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default Visited;
