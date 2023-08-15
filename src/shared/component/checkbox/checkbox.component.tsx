import { styled } from '@mui/material/styles';
import { Checkbox as box } from '@mui/material';

const CustomCheckbox = styled(box)(
 ({  }) => `
 padding:0px;
  `
);
export default function Checkbox () {
 return(
  <CustomCheckbox />
 );
} 
