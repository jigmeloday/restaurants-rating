import { Box, Grid } from '@mui/material';
import { CafeListCard } from './style/cafe-list.style';
import Typography from '../typography/typography';
import Icon from '../icon/icon';

function CafeList(props: any) {
    return (
        <Grid container item>
            <CafeListCard>
                <Grid item container width='200px' height='200px'>
                    <img src={props.item.cover} className='object-fit--cover' height='100%' width='100%'/>
                </Grid>
                <Grid item container direction='column' pt='4px'>
                    <Typography label={`Place: ${props.item.name}`} variant='caption' />
                    <Grid item container direction='row' justifyContent='space-between'>
                       {/*<Box>*/}
                       {/*    <Typography label={`Rating: ${props.item.rating}/5`} variant='caption' />*/}
                       {/*</Box>*/}
                       {/* <Box alignItems='end' className='cursor--pointer' width='50%'>*/}
                       {/*     <Icon iconName='tour'/>*/}
                       {/*     <Icon iconName='favorite_outlined'   />*/}
                       {/* </Box>*/}
                        <Grid item container xs={6}>
                            <Typography label={`Rating: ${props.item.rating}/5`} variant='caption' />
                        </Grid>
                        <Grid item container xs={6} justifyContent='end'>
                            <Icon iconName='tour'/>
                            <Box pl='12px'>
                                <Icon iconName='favorite_outlined'   />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </CafeListCard>
        </Grid>
    )
}

export default CafeList;
