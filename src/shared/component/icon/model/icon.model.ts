import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { MatColors } from '../../../model/common.model';

export interface IconProps {
    iconName?: string;
    color?: MatColors | string;
    className?: string;
    sx?: SxProps<Theme>;
    disabled?: boolean;
    click?: () => void;
}
