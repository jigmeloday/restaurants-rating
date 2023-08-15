import { styled } from '@mui/system';
import { Grid } from '@mui/material';


export const HeaderContainer = styled( Grid )(
    ( { theme } ) => `
   padding: 14px 80px;
   width: 100%;
   box-shadow: 0px 2px 4px 0px rgba(138, 193, 212, 0.24);
 ` );
export const ProfileHolder = styled( Grid )(
    ( { theme } ) => `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 2px;
    cursor: pointer;
    border: 1px solid ${theme.palette.primary.light};   
 ` );

