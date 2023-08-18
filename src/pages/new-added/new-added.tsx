import { Box, Grid } from '@mui/material';
import CafeList from '../../shared/component/cafe-list/cafe-list';
import { useDispatch, useSelector } from 'react-redux';
import { newCafeList, selectNewCafe } from '../landing/services/landing.slice';
import { useEffect } from 'react';

function NewAdded() {
    const dispatch = useDispatch();
    const cafe = useSelector(selectNewCafe);
    useEffect(() => {
        !cafe?.length && dispatch(newCafeList() as any)
    }, []);

    return(
        <Grid container item padding='34px'>
            <Grid item container direction='row' gap='18px' my='24px'>
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

export default NewAdded;
