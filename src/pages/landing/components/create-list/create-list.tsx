import { Box, Grid } from '@mui/material';
import Typography from '../../../../shared/component/typography/typography';
import Input from '../../../../shared/component/input/input.component';
import { useRef, useState } from 'react';
import Button from '../../../../shared/component/button/button.component';

function CreateList() {
    const [pic, setPic] = useState<string>('');
    const fileInputRef = useRef<any>(null);
    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[ 0 ];
        if ( selectedFile ) {
            setPic( selectedFile )
        }
    }
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    return(
        <Grid container item py='24px' px='32px'>
            <Box py='12px'>
                <Typography label='Create List' variant='body1' />
            </Box>
            <Grid item container my='24px' gap='12px'>
                <Input name='name' />
                <Input name='name' />
               <Box my='12px'>
                   <Button click={handleButtonClick} variant='outlined' label='Add Cover Image' />
               </Box>
                <Grid item container direction='row'>
                    <Button label='Create' />
                    <Button label='cancel' />
                </Grid>
                <Box hidden={true}>
                    <input type='file' accept="image/*" ref={fileInputRef} name='image' onChange={handleFileChange}/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CreateList;
