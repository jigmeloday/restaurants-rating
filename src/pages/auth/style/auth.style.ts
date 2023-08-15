import { styled } from '@mui/system';
import { Grid } from '@mui/material';


export const FormContainer = styled(Grid)(
    ({theme}) => `
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: 50%;
    height: fit-content;
    width: 364px;
    padding: 32px;
    background: ${theme.palette.white.main};
    border-radius: 8px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 2px 4px 0px rgba(138, 193, 212, 0.24);
 `);
