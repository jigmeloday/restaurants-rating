import { Grid } from '@mui/material';
import { CafeListCard } from './style/cafe-list.style';
import Typography from '../typography/typography';

function CafeList(props: any) {
    return (
        <Grid container item>
            <CafeListCard>
                <Grid item container>
                    <img src={props.item.data.cover} height='200px' width='250px'/>
                </Grid>
                <Grid item container direction='column' pt='4px'>
                    <Typography label={`Place: ${props.item.data.name}`} variant='caption' />
                    <Typography label={`Rating: ${props.item.data.rating}/5`} variant='caption' />
                </Grid>
            </CafeListCard>
        </Grid>
    )
}

export default CafeList;
