import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { CafeDetailsAPI } from '../landing/services/landing.api';
import { Box, Chip, Grid } from '@mui/material';
import Typography from '../../shared/component/typography/typography';
import CafeList from '../../shared/component/cafe-list/cafe-list';
import Button from '../../shared/component/button/button.component';
import { UploadCollections } from './services/detail.api';

function DetailPage() {
    const id = useParams()['id']
    const [detail, setDetail] = useState<any>();
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef<any>()
    useEffect(() => {
        CafeDetailsAPI(id).then((res) => {
            setDetail(res);
        })
    }, []);

    const handleUpload = () => {
        fileInputRef.current?.click();
    }

    const handleChange = (event: any) => {
        const selectedFile = event.target.files[0];
        if ( selectedFile ) {
            UploadCollections(selectedFile)
            // UploadProfile( selectedFile, user?.email ).then( r  => dispatch(setProfile(r)) );
            // const reader = new FileReader();
            // reader.onload = () => {
            //     setPic(reader?.result as any);
            // };
            // reader.readAsDataURL(selectedFile);
        }
    }

    return(
        <Grid container py='24px' px='24px'>
            <Grid item container my='24px'  height='340px'>
                <img src={detail?.cover} width='100%' height='100%' className='object-fit--cover border-radius--8'/>
            </Grid>
            <Grid item container my='12px' direction='column'>
                <Typography label={detail?.name} variant='body1' />
                <Typography label={detail?.rating} variant='body1' />
                <Typography label={detail?.feedback} variant='body1' />
                {
                   detail?.menu.length && detail?.menu?.map((item: string, index: number) => (
                       <Box key={index} my='24px'>
                           <Chip
                               label={item}
                               color="primary"
                           />
                       </Box>
                    ))
                }
            </Grid>
            <Grid item container my='24px' p='18px' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'>
                <Typography label='Our Collection' variant='body1' fontWeight='700'/>
                <Grid item container direction='row' gap='14px' pt='24px'>
                    {
                        detail?.collection?.length &&
                        detail?.collection?.map((item: any) => (
                            <Box key={item}>
                                <CafeList item={item}/>
                            </Box>
                        ))
                    }
                </Grid>
                <Grid item container mt='24px' justifyContent='center'>
                    <Button label='Upload Collections' variant='outlined' click={handleUpload}/>
                    <Box hidden={true}>
                        <input type='file' ref={fileInputRef}/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetailPage