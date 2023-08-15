import {Icon as MatIcon } from '@mui/material';
import { SxProps } from '@mui/system';
import {styled, Theme} from '@mui/material/styles';
import {useCallback} from 'react';
import React from 'react';
import { IconProps } from './model/icon.model';

const CustomIcon = styled(MatIcon)(
 ({ theme, ...props }) => `
   color: ${props?.color || theme.palette.black.contrastText}
  `
);

export function Icon (props: IconProps) {

 const handleClick = useCallback( () => !props?.disabled && props?.click && props.click(),
  [ props?.click, props?.disabled ]);

 return (
  <CustomIcon color={props?.color as any} className={props?.className as string} onClick={handleClick}
   sx={props.sx as SxProps<Theme>}>{props?.iconName}</CustomIcon>
 );
}

export default Icon;
