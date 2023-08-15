import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import { InputProps } from './model/input.model';

const CustomInput = styled( TextField )(
 ( { theme } ) => `
  & .MuiFormHelperText-root {
      color: ${theme.palette.error.main};
    }
  
  `
);

function Input (props: InputProps) {
 const { placeholder, 
  InputProps, 
  name, className,
  label,
  onChange,
  value, 
  variant,
  error, 
  sx,
  helperText,
  required, 
  onBlur, 
  type
 } = props;
 return(
  <CustomInput fullWidth
   className={className as string}
   name={name}
   onBlur={onBlur}
   variant={variant as any}
   placeholder={placeholder as string}
   label={label}
   InputProps={InputProps as any}
   type={type}
   value={value}
   onChange={onChange}
   helperText={helperText}
   error={error as boolean}
   sx={sx as any}
   required={required as boolean}
  />
 );
}

export default Input;
