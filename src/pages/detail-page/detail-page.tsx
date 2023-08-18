import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CafeDetailsAPI } from '../landing/services/landing.api';
import { Box, Chip, Grid } from '@mui/material';
import Typography from '../../shared/component/typography/typography';

function DetailPage() {
    const id = useParams()['id']
    const [detail, setDetail] = useState<any>();
    useEffect(() => {
        CafeDetailsAPI(id).then((res) => {
            setDetail(res);
        })
    }, []);
    return(
        <Grid container py='24px' px='24px'>
            <Grid item container my='24px'  height='340px'>
                <img src={detail?.cover} width='100%' height='100%' className='object-fit--cover border-radius--8'/>
            </Grid>
            <Grid item container my='12px' direction='column'>
                <Typography label={detail?.name} variant='body1' />
                <Typography label={detail.rating} variant='body1' />
                <Typography label={detail.feedback} variant='body1' />
                {
                    detail?.menu?.map((item: string, index: number) => (
                       <Box key={index} my='24px'>
                           <Chip
                               label={item}
                               color="primary"
                           />
                       </Box>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default DetailPage
