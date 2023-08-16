import styled from 'styled-components';
import { TextField } from '@mui/material';

export const CustomSearch = styled(TextField)(
    ({}) => `
  & .MuiInputBase-root{
    height: 45px;
    width: 300px;
    border-radius: 66px;
  }
  & .MuiInputBase-input {
    height: 18%;
    background: transparent;
  }
`);
