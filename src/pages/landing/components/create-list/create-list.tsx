import { Box, Grid } from '@mui/material';
import Typography from '../../../../shared/component/typography/typography';
import Input from '../../../../shared/component/input/input.component';
import { useRef, useState } from 'react';
import Button from '../../../../shared/component/button/button.component';
import { theme } from '../../../../assets/theme/theme';
import { Formik } from 'formik';

function CreateList(props: { handleClose: () => void }) {
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
    const createList = (values: { place: string, feedback: string }) => {
        const data = {
            name: values.place,
            feedback: values.feedback,
            // cover: pic
            menu: [],
            collection: [],
            visited: false
        }
    }
    return(
        <Grid container item py='24px' px='32px'>
            <Box py='12px'>
                <Typography label='Create List' variant='body1' />
            </Box>
            <Grid item container my='24px'>
               <Formik initialValues={{ place: '', feedback: '' }} onSubmit={(values) => {
                   createList(values)
               }}>
                   {({ handleSubmit, handleChange, values }) => (
                       <Grid item container gap='12px'>
                           <Input name='place' label='Place Name' value={values.place} onChange={handleChange} />
                           <Input name='feedback' label='Feedback/Suggestion' value={values.feedback} onChange={handleChange}/>
                           <Box my='12px'>
                               <Button click={handleButtonClick} variant='outlined' label='Add Cover Image' />
                           </Box>
                           <Grid item container direction='row' gap='12px'>
                               <Button variant='contained' label='Create' click={handleSubmit} />
                               <Button color='error' variant='contained' label='cancel' click={props.handleClose} />
                           </Grid>
                       </Grid>
                   )}
               </Formik>
                <Box hidden={true}>
                    <input type='file' accept="image/*" ref={fileInputRef} name='image' onChange={handleFileChange}/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CreateList;
