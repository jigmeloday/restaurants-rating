import { OutlinedInputProps, SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { MatInputVariants } from '../../../model/common.model';

export interface InputProps{
    InputProps?: Partial<OutlinedInputProps>;
    label?: string;
    name: string
    placeholder?: string;
    variant?: MatInputVariants;
    className?: string;
    type?: string;
    value?: string;
    onChange?: any;
    onBlur?: any
    dataCy?: string;
    error?: boolean;
    helperText?: string;
    sx?: SxProps<Theme>;
    required?: boolean;
}
