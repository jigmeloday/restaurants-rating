import Button from '../../shared/component/button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { getCafeList, selectCafe } from './services/landing.slice';
import { useEffect, useState } from 'react';
import { Box, Dialog, Grid } from '@mui/material';
import CafeList from '../../shared/component/cafe-list/cafe-list';
import CreateList from './components/create-list/create-list';

function Landing() {
    const dispatch = useDispatch();
    const cafe = useSelector(selectCafe);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        !cafe?.length && dispatch(getCafeList() as any)
    }, []);

    return(
        <Grid container item padding='34px' >
            <Grid item container>
                <Button click={handleClick} label='Create List' variant='contained'/>
            </Grid>
            <Grid item container direction='row' gap='18px' my='24px'>
                {
                    cafe?.map((item:{ id: string, name: string }) => (
                        <Box key={item.id}>
                            <CafeList item={item} />
                        </Box>
                    ))
                }
            </Grid>
            <Dialog
                open={open}
                onClose={handleClick}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <CreateList handleClose={handleClick} />
            </Dialog>
        </Grid>
    )
}

export default Landing;
