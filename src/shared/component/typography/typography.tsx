import { Typography as MatTypography } from '@mui/material';
import { TypographyProps } from './model/typography.model';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(MatTypography)(
 ({ theme, ...props }) => `
   color: ${props.color || theme.palette.black.dark};
   font-weight: ${props.fontWeight ||theme.typography.fontWeightRegular};
   font-size: ${props.fontSize ||theme.typography.htmlFontSize};

   &.hover-primary:hover {
       &.MuiTypography-root  {
          color: ${ theme.palette.primary.main }
       }
     }
  }
 `
);

export function Typography (props: TypographyProps) {
 return (
  <CustomTypography
   color={props?.color} variant={props.variant} align={props?.align} sx={props?.sx}
   className={props?.className} fontWeight={props?.fontWeight} fontSize={props?.fontSize} onClick={props?.click}
   id={props?.id} noWrap={props?.noWrap}>
   {props?.label}
  </CustomTypography>
 );
}

export default Typography;
