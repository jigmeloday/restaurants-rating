import { Box, Chip, Grid, Stack } from '@mui/material';
import Typography from '../../../../shared/component/typography/typography';
import Input from '../../../../shared/component/input/input.component';
import { useEffect, useRef, useState } from 'react';
import Button from '../../../../shared/component/button/button.component';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { postCafeList, selectLoading } from '../../services/landing.slice';
import { CREATE_LIST_SCHEMA } from '../../schema/create-list.schema';
import { selectUser } from '../../../auth/services/auth.slice';

function CreateList(props: { handleClose: () => void }) {
    const [pic, setPic] = useState<string>('');
    const [chips, setChips] = useState<any>([]);
    const isLoading = useSelector(selectLoading)
    const user = useSelector(selectUser)
    const fileInputRef = useRef<any>(null);
    const dispatch = useDispatch();
    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[ 0 ];
        if ( selectedFile ) {
           setPic(selectedFile)
        }
    }
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    const createList = (values: { place: string, feedback: string }) => {
        const data = {
            name: values.place,
            feedback: values.feedback,
            cover: pic,
            menu: chips,
            creator: user.email,
            shared: user.shared
        }
        dispatch(postCafeList(data) as keyof unknown)
    }
    const handleAddChip = (value: any) => {
        if (value.trim() !== '') {
            setChips([...chips, value]);
        }
    }
    const handleDeleteChip = (chipToDelete: any) => () => {
        setChips((prevChips: any) => prevChips.filter((chip: any) => chip !== chipToDelete));
    };
    useEffect(() => {
        if ( isLoading === 'loaded' ) {
            props.handleClose()
        }
    }, [isLoading])
    return(
        <Grid container item py='24px' px='32px'>
            <Box py='12px'>
                <Typography label='Create List' variant='body1' />
            </Box>
            <Grid item container my='24px'>
               <Formik
                   validationSchema={CREATE_LIST_SCHEMA}
                   initialValues={{ place: '', feedback: '', other: '' }} onSubmit={(values) => {
                   createList(values)
               }}>
                   {({ handleSubmit, handleChange, values, touched, errors }) => (
                       <Grid item container gap='12px'>
                           <Input
                               helperText={ (touched.place &&
                                   errors.place &&
                                   errors.place) as string }
                               name='place' label='Place Name' value={values.place} onChange={handleChange} />
                           <Input name='feedback' label='Feedback/Suggestion' value={values.feedback} onChange={handleChange}/>
                           <Input name='other'
                                  onChange={handleChange}
                                  value={values.other}
                                  label='Add Menu'
                                  keyPress={(e: any) => {
                                      if (e.key === 'Enter') {
                                          handleAddChip(values.other);
                                          values.other = ''
                                      }
                                  }}
                                   />
                           <Grid item container>
                               <Stack direction="row" spacing={1}>
                                   {chips?.map((chip: any, index: number) => (
                                       <Chip
                                           key={index}
                                           label={chip}
                                           onDelete={handleDeleteChip(chip)}
                                           color="primary"
                                       />
                                   ))}
                               </Stack>
                           </Grid>
                           <Box my='12px'>
                               <Button click={handleButtonClick} variant='outlined' label='Add Cover Image' />
                           </Box>
                           <Grid item container direction='row' gap='12px'>
                               <Button disabled={isLoading === 'pending'} variant='contained' label={ isLoading === 'pending' ? 'Please Wait' : 'Create' } click={handleSubmit}  />
                               <Button disabled={isLoading === 'pending'} color='error' variant='contained' label='cancel' click={props.handleClose} />
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
