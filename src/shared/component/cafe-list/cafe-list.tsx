import { Box, Grid } from '@mui/material';
import { CafeListCard } from './style/cafe-list.style';
import Typography from '../typography/typography';

function CafeList(props: any) {
    return (
        <Grid container item>
            <CafeListCard>
                <Grid item container width='200px' height='200px'>
                    <img src={props.item.data.cover} className='object-fit--cover' height='100%' width='100%'/>
                </Grid>
                <Grid item container direction='column' pt='4px'>
                    <Typography label={`Place: ${props.item.data.name}`} variant='caption' />
                    <Typography label={`Rating: ${props.item.data.rating}/5`} variant='caption' />
                    <Typography label={`Feedback: ${props.item.data.feedback.slice(0, 20)}...`} variant='caption' />
                </Grid>
            </CafeListCard>
        </Grid>
    )
}

export default CafeList;
