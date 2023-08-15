import { SxProps, Theme } from '@mui/material';
import { Button as MatButton } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { ButtonProps } from './model/button.model';

const CustomButton = styled(MatButton)(
 ({ theme, }) => `
  &.button--icon {
    &.MuiButtonBase-root {
      padding: 0;
      min-width: 0;
    }
   }
   &.Mui-disabled {
     background-color: ${theme.palette.altoGray.main};
     color: ${theme.palette.black.contrastText};
   }
  `
);

function Button (props: ButtonProps){
 return(
  <CustomButton
   color={props?.color}
   variant={props?.variant}
   onClick={props?.click}
   disabled={props?.disabled}
   className={props?.className}
   sx={props.sx as SxProps<Theme>}
   startIcon={props.startIcon}
   endIcon={props.endIcon}
   type={props?.type}
  >
   {props?.child}
   {props?.label}
  </CustomButton>
 );
}

export default Button;
