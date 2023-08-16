export interface NavModel {
    label: string;
    path: string
}

export interface MenuComponentProps {
    anchorEl: any;
    open: boolean;
    handleClose: () => any
}
