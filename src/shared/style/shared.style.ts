import styled from 'styled-components';
import { Box, TextField } from '@mui/material';

export const CustomSearch = styled( TextField )(
    ( {} ) => `
  & .MuiInputBase-root{
    height: 45px;
    width: 300px;
    border-radius: 66px;
  }
  & .MuiInputBase-input {
    height: 18%;
    background: transparent;
  }
` );

export const ProfilePicHolder = styled( Box )(
    ( {} ) => `
  height: 100px;
  width: 100px;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  top: 140px;
  left: 20px;
` );
