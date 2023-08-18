import { Box, Grid } from '@mui/material';
import { CafeListCard } from './style/cafe-list.style';
import Typography from '../typography/typography';
import Icon from '../icon/icon';
import { theme } from '../../../assets/theme/theme';
import Button from '../button/button.component';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CafeList(props: any) {
    console.log(props)
    const route = useNavigate();
    return (
        <Grid container item>
            <CafeListCard>
                <Grid item container width='200px' height='200px'>
                    <img src={props?.item?.cover} className='object-fit--cover' height='100%' width='100%'/>
                </Grid>
                <Grid item container direction='column' pt='4px'>
                    <Typography label={`Place: ${props?.item?.name}`} variant='caption' />
                    <Grid item container direction='row' justifyContent='space-between'>
                        <Grid item container xs={6}>
                            <Typography label={`Rating: ${props?.item?.rating || 0}/5`} variant='caption' />
                        </Grid>
                        <Grid item container xs={6} justifyContent='end'>
                            {
                                props?.item?.visited ?  <Icon iconName='tour' color={theme.palette.primary.main}/> : null
                            }
                            <Box pl='12px' className='cursor--pointer'>
                                <Icon iconName='favorite_outlined' color={theme.palette.primary.main}  />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item container mt='12px' xs={12}>
                        <Button variant='outlined' click={() => route(`detail/${props?.item?.id}`)}  label='Details' className='width--full'/>
                    </Grid>
                </Grid>
            </CafeListCard>
        </Grid>
    )
}

export default CafeList;
