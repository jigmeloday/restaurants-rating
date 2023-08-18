import { Box, Grid } from '@mui/material';
import Typography from '../../../../shared/component/typography/typography';
import Input from '../../../../shared/component/input/input.component';

function CreateList() {
    return(
        <Grid container item py='24px' px='32px'>
            <Box py='12px'>
                <Typography label='Create List' variant='body1' />
            </Box>
            <Grid item container my='24px'>
                <Input name='name' />
            </Grid>
        </Grid>
    )
}

export default CreateList;
