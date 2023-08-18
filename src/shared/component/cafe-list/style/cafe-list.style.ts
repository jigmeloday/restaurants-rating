import { styled } from '@mui/system';
import { Grid } from '@mui/material';


export const CafeListCard = styled(Grid)(
    ({theme}) => `
    height: fit-content;
    width: 260px;
    padding: 32px;
    background: ${theme.palette.white.main};
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px rgba(138, 193, 212, 0.24);
 `);
