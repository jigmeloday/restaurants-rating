import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { CafeDetailsAPI } from '../landing/services/landing.api';
import { Box, Chip, Grid } from '@mui/material';
import Typography from '../../shared/component/typography/typography';
import CafeList from '../../shared/component/cafe-list/cafe-list';
import Button from '../../shared/component/button/button.component';
import { UpdateVisited, UploadCollections } from './services/detail.api';
import { useDispatch, useSelector } from 'react-redux';
import { getCafeList } from '../landing/services/landing.slice';
import { selectUser } from '../auth/services/auth.slice';

function DetailPage() {
    const id = useParams()['id']
    const [detail, setDetail] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [collections, setCollections] = useState(detail?.collection);
    const [visited, setVisited] = useState<any>(true);
    const user = useSelector(selectUser)
    const fileInputRef = useRef<any>();
    const dispatch = useDispatch();
    useEffect(() => {
        CafeDetailsAPI(id).then((res) => {
            setDetail(res);
        })
    }, []);

    useEffect(() => {
        setCollections(detail?.collection);
        setVisited(detail?.visited);
    }, [detail]);
    const handleUpload = () => {
        fileInputRef.current?.click();
    }

    const handleChange = (event: any) => {
        setLoading(true)
        const selectedFile = event.target.files[0];
        if ( selectedFile ) {
            UploadCollections(selectedFile, id, detail.collection).then((res) => {
                setCollections([...collections, res]);
                setLoading(false)
            });
        }
    }

    const handleToggle = () => {
        setLoading(true)
        UpdateVisited(id).then((res) => {
            setVisited(res)
            setLoading(false)
            dispatch(getCafeList(user.email) as keyof unknown);
        })
    }

    return(
        <Grid container py='24px' px='24px'>
            <Grid item container my='24px'  height='340px'>
                <img src={detail?.cover} width='100%' height='100%' className='object-fit--cover border-radius--8'/>
            </Grid>
            <Grid item container my='12px' direction='column'>
                <Typography label={`Place: ${detail?.name}`} variant='body1' />
                <Typography label={`Rating: ${detail?.rating}`} variant='body1' />
                <Typography label={`Feedback: ${detail?.feedback}`} variant='body1' />
                <Box my='12px' hidden={visited}>
                    <Button disabled={loading} click={handleToggle} label='Visited' variant='outlined' />
                </Box>
                {
                   detail?.menu.length ? detail?.menu?.map((item: string, index: number) => (
                       <Box key={index} my='24px'>
                           <Chip
                               label={item}
                               color="primary"
                           />
                       </Box>
                    )): null
                }
            </Grid>
            <Grid item container my='24px' p='18px' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'>
                <Typography label='Our Collection' variant='body1' fontWeight='700'/>
                <Grid item container direction='row' gap='14px' pt='24px'>
                    {
                        collections?.length ?
                        collections?.map((item: any) => (
                            <Box key={item}>
                                <CafeList item={item}/>
                            </Box>
                        )): null
                    }
                </Grid>
                <Grid item container mt='24px' justifyContent='center'>
                    <Button disabled={loading} label='Upload Collections' variant='contained' click={handleUpload}/>
                    <Box hidden={true}>
                        <input type='file' ref={fileInputRef} onChange={handleChange}/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetailPage
