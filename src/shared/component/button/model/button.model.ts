import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { MatColors, MatVariants } from '../../../model/common.model';

export interface ButtonProps{
    label?: string;
    sx?: SxProps<Theme>;
    child?: JSX.Element | null;
    color?: MatColors;
    variant?: MatVariants;
    disabled?: boolean;
    click?: (() => void) | any ;
    className?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    type?: 'submit' | 'reset' | 'button';
}
